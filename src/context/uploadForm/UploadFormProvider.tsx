import React, {
  createContext,
  useReducer,
  PropsWithChildren,
  useEffect,
} from "react";

import { TypeFormProps, UploadFormProviderProps } from "@src/interfaces";

import { initialState, uploadFormReducer } from "./uploadFormReducer";

export const uploadFormContext = createContext({} as UploadFormProviderProps);

export const UploadFormProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(uploadFormReducer, initialState);

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

  useEffect(() => {
    handleVerifyStep();
  }, []);

  return (
    <uploadFormContext.Provider
      value={{
        ...state,
        handleSetTypeForm,
        handleSetStepForm,
      }}
    >
      {children}
    </uploadFormContext.Provider>
  );
};
