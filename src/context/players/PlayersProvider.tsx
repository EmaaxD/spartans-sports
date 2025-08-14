import React, {
  createContext,
  useReducer,
  PropsWithChildren,
  useEffect,
  useMemo,
} from "react";

import { initialState, playersReducer } from "./playersReducer";
import {
  PlayerDataProps,
  PlayersProviderProps,
  TopPlayerCardProps,
} from "@src/interfaces";
import { getPlayerRank } from "@src/utils/functions";

export const playersContext = createContext({} as PlayersProviderProps);

export const PlayersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(playersReducer, initialState);

  const handleGetPlayers = async () => {
    try {
      const resp = await fetch("/api/getPlayers");
      const data: PlayerDataProps[] = await resp.json();

      if (Array.isArray(data)) {
        dispatch({ type: "SET_PLAYERS", payload: data });
      }
    } catch (error) {
      console.log("Error fetching players:", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const handleSelectedPlayer = (playerId: string | null) => {
    const player = top100PlayersMemo.find((p) => p._id === playerId) || null;

    if (player) {
      dispatch({ type: "SET_SELECTED_PLAYER", payload: player });
    }
  };

  const handleAddPlayer = (player: PlayerDataProps) => {
    dispatch({ type: "ADD_PLAYER", payload: player });
  };

  useEffect(() => {
    if (state.players.length === 0) {
      handleGetPlayers();
    }
  }, []);

  const top100PlayersMemo = useMemo(() => {
    if (state.players.length === 0) return [];

    const withRank = state.players.map((player) => ({
      ...player,
      rank: getPlayerRank(player.playerValue),
    }));

    return withRank.sort((a, b) => a.rank - b.rank).slice(0, 100);
  }, [state.players]);

  return (
    <playersContext.Provider
      value={{
        ...state,
        top100PlayersMemo,
        handleSelectedPlayer,
        handleAddPlayer,
      }}
    >
      {children}
    </playersContext.Provider>
  );
};
