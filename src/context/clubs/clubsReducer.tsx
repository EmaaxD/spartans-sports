import { Category, SelectedClubProps } from "@src/interfaces";

interface clubsState {
  clubs: Category[];
  loading: boolean;
  selectedClub: SelectedClubProps | null;
}

type clubsAction =
  | { type: "SET_CLUBS"; payload: Category[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SELECT_CLUB"; payload: SelectedClubProps | null };

export const initialClubsState: clubsState = {
  clubs: [],
  loading: true,
  selectedClub: null,
};

export const clubsReducer = (
  state = initialClubsState,
  action: clubsAction
): clubsState => {
  switch (action.type) {
    case "SET_CLUBS":
      return { ...state, clubs: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SELECT_CLUB":
      return { ...state, selectedClub: action.payload };
    default:
      return state;
  }
};
