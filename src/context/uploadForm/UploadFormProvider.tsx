import React, {
  createContext,
  useReducer,
  PropsWithChildren,
  useEffect,
  useContext,
} from "react";
import toast from "react-hot-toast";

import {
  CreatePlayerResp,
  TypeFormProps,
  UploadFormProviderProps,
} from "@src/interfaces";

import { initialState, uploadFormReducer } from "./uploadFormReducer";
import { playersContext } from "../players";

export const uploadFormContext = createContext({} as UploadFormProviderProps);

export const UploadFormProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(uploadFormReducer, initialState);

  const { handleAddPlayer } = useContext(playersContext);

  const handleSetTypeForm = (typeForm: TypeFormProps) => {
    dispatch({ type: "SET_TYPE_FORM", payload: typeForm });
  };

  const handleSetStepForm = (step: number) => {
    if (step === 2) {
      // Solo persistir si hay un tipo válido y estamos en el cliente
      if (typeof window !== 'undefined' && state.typeForm && state.typeForm !== ("null" as any)) {
        localStorage.setItem("typeForm", state.typeForm as string);
      }
    } else if (step === 1) {
      // Al volver al paso 1 no forzar a 'null' en storage
      // (opcional: podríamos limpiar) => mantener selección previa
      if (typeof window !== 'undefined') {
        localStorage.removeItem("typeForm");
      }
    }

    dispatch({ type: "SET_STEP_FORM", payload: step });
  };

  const handleVerifyStep = () => {
    if (typeof window === 'undefined') return; // Solo ejecutar en el cliente
    
    const typeFormLs = localStorage.getItem("typeForm");

    if (typeFormLs) {
      const sanitized =
        typeFormLs === "null" || typeFormLs === "undefined"
          ? null
          : (typeFormLs as TypeFormProps);
      if (sanitized) {
        dispatch({ type: "SET_TYPE_FORM", payload: sanitized });
        handleSetStepForm(2);
      }
    }
  };

  const handleUploadForm = async (dataForm: any): Promise<boolean> => {
    try {
      let respPromise = false;

      if (state.typeForm === "player") {
        console.log("📤 Preparing to send player data", {
          hasFile: !!dataForm.file,
          fileName: dataForm.file?.name,
          fileSize: dataForm.file?.size
        });

        let playerImageUrl = null;

        // Si hay archivo, primero subirlo a S3
        if (dataForm.file) {
          console.log("📤 Uploading file to S3 first...");
          
          const fileFormData = new FormData();
          fileFormData.append('file', dataForm.file);

          const uploadResponse = await fetch('/api/uploadFileS3', {
            method: 'POST',
            body: fileFormData,
          });

          if (!uploadResponse.ok) {
            const errorData = await uploadResponse.json();
            throw new Error(`Error uploading file: ${errorData.error || 'Unknown error'}`);
          }

          const uploadResult = await uploadResponse.json();
          playerImageUrl = uploadResult.url;
          
          console.log("✅ File uploaded to S3 successfully:", playerImageUrl);
        }

        // Preparar datos del jugador (siempre JSON ahora)
        const playerData = { 
          ...dataForm,
          createdAt: new Date().toISOString(),
          playerImg: playerImageUrl // URL del S3 o null
        };
        
        // Remover file del objeto ya que ahora tenemos la URL
        delete playerData.file;
        
        console.log("📤 Sending player data to database:", {
          ...playerData,
          hasImage: !!playerImageUrl
        });

        const resp = await fetch("/api/createPlayer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(playerData),
        });

        const player: CreatePlayerResp = await resp.json();

        if (player.status === "success") {
          respPromise = true;

          handleAddPlayer(player.data);

          if (typeof window !== 'undefined') {
            localStorage.setItem("player_id", player.data._id);
          }

          toast.success("Jugador creado correctamente");
        }
      }

      return respPromise;
    } catch (error) {
      console.log("Error handling upload form:", error);
      toast.error(error instanceof Error ? error.message : "Error al crear el jugador");
      return false; // Indicar fallo en la promesa
    }
  };

  useEffect(() => {
    handleVerifyStep();
  }, []);

  return (
    <uploadFormContext.Provider
      value={{
        ...state,
        handleSetTypeForm,
        handleSetStepForm,
        handleUploadForm,
      }}
    >
      {children}
    </uploadFormContext.Provider>
  );
};
