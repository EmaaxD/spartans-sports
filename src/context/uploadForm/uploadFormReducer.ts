import { TypeFormProps } from "@src/interfaces";

interface UploadFormState {
  typeForm: TypeFormProps;
}

type UploadFormAction =
  | {
      type: "SET_TYPE_FORM";
      payload: TypeFormProps;
    }
  | { type: "RESET_FORM" };

export const initialState: UploadFormState = {
  typeForm: null,
};

export const uploadFormReducer = (
  state: UploadFormState,
  action: UploadFormAction
): UploadFormState => {
  switch (action.type) {
    case "SET_TYPE_FORM":
      return { ...state, typeForm: action.payload };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};
