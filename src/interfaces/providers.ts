import { Category, Club, SelectedClubProps } from "./clubs";
import { TypeFormProps } from "./ui";

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

export interface UploadFormProviderProps {
  stepForm: number;
  typeForm: TypeFormProps;
  handleSetTypeForm: (typeForm: TypeFormProps) => void;
  handleSetStepForm: (step: number) => void;
}
