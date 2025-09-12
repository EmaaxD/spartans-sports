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
        const resp = await fetch("/api/createPlayer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...dataForm,
            createdAt: new Date().toISOString(),
          }),
        });
        const player: CreatePlayerResp = await resp.json();

        if (player.status === "success") {
          respPromise = true;

          handleAddPlayer(player.data);

          localStorage.setItem("player_id", player.data._id);

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
