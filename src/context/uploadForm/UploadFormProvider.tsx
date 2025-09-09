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
      // Solo persistir si hay un tipo válido
      if (state.typeForm && state.typeForm !== ("null" as any)) {
        localStorage.setItem("typeForm", state.typeForm as string);
      }
    } else if (step === 1) {
      // Al volver al paso 1 no forzar a 'null' en storage
      // (opcional: podríamos limpiar) => mantener selección previa
      localStorage.removeItem("typeForm");
    }

    dispatch({ type: "SET_STEP_FORM", payload: step });
  };

  const handleVerifyStep = () => {
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
        // Clone payload so we can modify it (upload file and attach player_image)
        const payload: any = { ...dataForm };

        // If there's a File object (from client) and no player_image yet, upload it
        if (!payload.player_image && payload.file) {
          try {
            // Only run in browser context where File is available
            const isFile =
              typeof File !== "undefined" && payload.file instanceof File;

            if (isFile) {
              const formData = new FormData();
              formData.append("file", payload.file);

              const uploadResp = await fetch("/api/uploadFileS3", {
                method: "POST",
                body: formData,
              });

              const uploadJson = await uploadResp.json();
              const url = uploadJson?.url || uploadJson?.data?.url;

              if (url) {
                payload.player_image = url;
              } else {
                console.error("Upload failed or no url returned", uploadJson);
                toast.error("Error al subir la imagen");
                return false;
              }
            }
          } catch (err) {
            console.error("Error uploading image:", err);
            toast.error("Error al subir la imagen");
            return false;
          }
        }

        // Remove raw file from payload before sending to createPlayer
        if (payload.file) delete payload.file;

        const resp = await fetch("/api/createPlayer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...payload,
            createdAt: new Date().toISOString(),
          }),
        });

        const player: CreatePlayerResp = await resp.json();

        if (player.status === "success") {
          respPromise = true;

          handleAddPlayer(player.data);

          toast.success("Jugador creado correctamente");
        }
      }

      return respPromise;
    } catch (error) {
      console.log("Error handling upload form:", error);
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
