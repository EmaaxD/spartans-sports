import { Category, Club, SelectedClubProps } from "./clubs";

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

export interface ClubsProviderProps {
  clubs: Category[];
  loading: boolean;
  selectedClub: SelectedClubProps | null;
  handleSelectedClub: (club: SelectedClubProps | null) => void;
  handleGetClub: (clubId: string) => void;
}
