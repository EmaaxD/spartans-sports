import { PlayerDataProps, TopPlayerCardProps } from "@src/interfaces";

interface PlayersState {
  players: PlayerDataProps[];
  loading: boolean;
  selectedPlayer: TopPlayerCardProps | null;
}

export const initialState: PlayersState = {
  players: [],
  loading: true,
  selectedPlayer: null,
};

type Action =
  | { type: "SET_PLAYERS"; payload: PlayerDataProps[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "ADD_PLAYER"; payload: PlayerDataProps }
  | { type: "SET_SELECTED_PLAYER"; payload: TopPlayerCardProps | null };

export const playersReducer = (
  state = initialState,
  action: Action
): PlayersState => {
  switch (action.type) {
    case "SET_PLAYERS":
      return { ...state, players: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "ADD_PLAYER":
      return { ...state, players: [...state.players, action.payload] };
    case "SET_SELECTED_PLAYER":
      return { ...state, selectedPlayer: action.payload };
    default:
      return state;
  }
};
