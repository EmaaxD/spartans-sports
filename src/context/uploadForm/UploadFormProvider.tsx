import React, { createContext, useReducer, PropsWithChildren } from "react";

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

  return (
    <uploadFormContext.Provider
      value={{
        ...state,
        handleSetTypeForm,
      }}
    >
      {children}
    </uploadFormContext.Provider>
  );
};
