import { Category, Club, SelectedClubProps } from "./clubs";
import { PlayerDataProps } from "./req";
import { TopPlayerCardProps, TypeFormProps } from "./ui";

export interface UiProviderProps {
  openLoginDialog: boolean;
  hideClasses: boolean;
  openMenu: boolean;
  openShoppingCart: boolean;
  openFootData: boolean;
  titleFootData: string;
  contentFootData: string;
  playVoice: boolean;
  handleToggleHideClasses: () => void;
  handleToggleMenu: () => void;
  handleToggleOpenShoppingCart: () => void;
  handleToggleOpenFootData: () => void;
  handleSetTitleFootData: (title: string) => void;
  handleSetContentFootData: (content: string) => void;
  handleTogglePlayVoice: (value: boolean) => void;
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
  handleUploadForm: (dataForm: any) => Promise<boolean>;
}

export interface PlayersProviderProps {
  players: PlayerDataProps[];
  loading: boolean;
  selectedPlayer: TopPlayerCardProps | null;
  top100PlayersMemo: TopPlayerCardProps[];
  top100PlayersFemaleMemo: TopPlayerCardProps[];
  handleSelectedPlayer: (playerId: string | null) => void;
  handleAddPlayer: (player: PlayerDataProps) => void;
}
