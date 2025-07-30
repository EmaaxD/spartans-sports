export interface UiProviderProps {
  openLoginDialog: boolean;
  hideClasses: boolean;
  openMenu: boolean;
  openShoppingCart: boolean;
  openFootData: boolean;
  titleFootData: string;
  contentFootData: string;
  handleToggleHideClasses: () => void;
  handleToggleMenu: () => void;
  handleToggleOpenShoppingCart: () => void;
  handleToggleOpenFootData: () => void;
  handleSetTitleFootData: (title: string) => void;
  handleSetContentFootData: (content: string) => void;
}
