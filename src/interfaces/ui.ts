import { StaticImageData } from "next/image";
import { PropsWithChildren, ReactNode } from "react";
import { Club, PlayerWithCategory } from "./clubs";
import { PlayerDataProps } from "./req";

export interface SportsLayoutProps {
  layoutId: string;
  children: React.ReactNode;
}

export interface AllClubsContainerProps extends PropsWithChildren {
  clubsScreen?: boolean;
}

export interface ClubsHomeContainerProps {
  idSection: string;
  titleSection: string;
  children: React.ReactNode;
}

export interface CarouselContainerProps extends PropsWithChildren {
  showDots?: boolean;
  rtl?: boolean;
  arrows?: boolean;
  autoPlaySpeed?: number;
}

export interface ClubCardProps {
  _id: string;
  name: string;
  logo: string | StaticImageData;
  description: string;
  location: string;
  established: string;
  presentationVideo: string;
  category: string;
  onHandleSelectedClub: () => void;
}

export interface JoinUsCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface MainDialogProps {
  isOpen: boolean;
  title?: string;
  width?: string;
  glassStyle?: boolean;
  onHandleClose: () => void;
  children: React.ReactNode;
}

export interface MainHeaderLinkProps {
  index: number;
  label: string;
  href?: string;
  icon: React.ElementType;
  isMobile?: boolean;
}

export interface UserLoginProps {
  isMobile?: boolean;
}

export interface HeaderClubsScreenProps {
  title: string;
  onlySelectCat?: boolean;
  noSearch?: boolean;
  search?: string;
  selectCategory: string;
}

export interface MainSelectDataOptionProps {
  value: string;
  label: string;
}

export interface PlayerCardProps extends PlayerWithCategory {}

export interface BadgetInfoProps {
  colorCard: string;
  label: string;
  value: string | number;
}

export interface PlayerCardFooterProps {
  name: string;
  position: string;
  age: number;
  value: string | number;
  height: string | number;
  weight: string | number;
  ims: string;
  colorCard: string;
}

export type TypeFormProps = "player" | "club" | "danceAcademy" | null;

export interface TopPlayerCardProps extends PlayerDataProps {
  rank: number;
}
