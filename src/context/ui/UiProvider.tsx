import { createContext, useReducer, PropsWithChildren } from "react";

import { initState, uiReducer } from "./uiReducer";
import { UiProviderProps } from "@src/interfaces";
import { footerLinks } from "@src/utils/const";

export const uiContext = createContext({} as UiProviderProps);

export const UiProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initState);

  const handleToggleHideClasses = () =>
    dispatch({ type: "TOGGLE_HIDE_CLASSES" });

  const handleToggleMenu = () => dispatch({ type: "TOGGLE_OPEN_MENU" });

  const handleToggleOpenShoppingCart = () =>
    dispatch({ type: "TOGGLE_OPEN_SHOPPING_CART" });

  const handleToggleOpenFootData = () =>
    dispatch({ type: "TOGGLE_OPEN_FOOT_DATA" });

  const handleSetTitleFootData = (titleId: string) => {
    const dataTitle = footerLinks.find((item) => item.data === titleId);

    const title = dataTitle ? dataTitle.label : "No Title";

    dispatch({ type: "SET_TITLE_FOOT_DATA", payload: title });
  };

  const handleSetContentFootData = (titleId: string) => {
    const dataContent = footerLinks.find((item) => item.data === titleId);

    const content = dataContent ? dataContent.text : "No Content";

    dispatch({ type: "SET_CONTENT_FOOT_DATA", payload: content });
  };

  const handleTogglePlayVoice = (value: boolean) =>
    dispatch({ type: "TOGGLE_PLAY_VOICE", payload: value });

  return (
    <uiContext.Provider
      value={{
        openLoginDialog: state.openLoginDialog,
        hideClasses: state.hideClasses,
        openMenu: state.openMenu,
        openShoppingCart: state.openShoppingCart,
        openFootData: state.openFootData,
        titleFootData: state.titleFootData,
        contentFootData: state.contentFootData,
        playVoice: state.playVoice,
        handleToggleHideClasses,
        handleToggleMenu,
        handleToggleOpenShoppingCart,
        handleToggleOpenFootData,
        handleSetTitleFootData,
        handleSetContentFootData,
        handleTogglePlayVoice,
      }}
    >
      {children}
    </uiContext.Provider>
  );
};
