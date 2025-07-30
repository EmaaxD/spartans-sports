interface initStateUiReducer {
  openLoginDialog: boolean;
  hideClasses: boolean;
  openMenu: boolean;
  openShoppingCart: boolean;
  openFootData: boolean;
  titleFootData: string;
  contentFootData: string;
}

export const initState: initStateUiReducer = {
  openLoginDialog: false,
  hideClasses: false,
  openMenu: false,
  openShoppingCart: false,
  openFootData: false,
  titleFootData: "",
  contentFootData: "",
};

type UiAction =
  | { type: "TOGGLE_OPEN_LOGIN_DIALOG" }
  | { type: "TOGGLE_HIDE_CLASSES" }
  | { type: "TOGGLE_OPEN_MENU" }
  | { type: "TOGGLE_OPEN_SHOPPING_CART" }
  | { type: "TOGGLE_OPEN_FOOT_DATA" }
  | { type: "SET_TITLE_FOOT_DATA"; payload: string }
  | { type: "SET_CONTENT_FOOT_DATA"; payload: string };

export const uiReducer = (state = initState, action: UiAction) => {
  switch (action.type) {
    case "TOGGLE_OPEN_LOGIN_DIALOG":
      return {
        ...state,
        openLoginDialog: !state.openLoginDialog,
      };

    case "TOGGLE_HIDE_CLASSES":
      return {
        ...state,
        hideClasses: !state.hideClasses,
      };

    case "TOGGLE_OPEN_MENU":
      return {
        ...state,
        openMenu: !state.openMenu,
      };

    case "TOGGLE_OPEN_SHOPPING_CART":
      return {
        ...state,
        openShoppingCart: !state.openShoppingCart,
      };

    case "TOGGLE_OPEN_FOOT_DATA":
      return {
        ...state,
        openFootData: !state.openFootData,
      };

    case "SET_TITLE_FOOT_DATA":
      return {
        ...state,
        titleFootData: action.payload,
      };

    case "SET_CONTENT_FOOT_DATA":
      return {
        ...state,
        contentFootData: action.payload,
      };

    default:
      return state;
  }
};
