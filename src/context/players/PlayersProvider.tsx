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
    } else {
      const playerNoFound = top100PlayersMemo[0];

      dispatch({ type: "SET_SELECTED_PLAYER", payload: playerNoFound });
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

    // Ordenar por rank ascendente; si empatan, priorizar mayor playerValue
    const sorted = withRank.sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank;
      const av = a.playerValue ?? 0;
      const bv = b.playerValue ?? 0;
      return bv - av;
    });

    // Asegurar que no se repitan ranks: si igual o menor al anterior, incrementar
    let lastAssigned = 0;
    for (const p of sorted) {
      if (p.rank <= lastAssigned) {
        p.rank = lastAssigned + 1;
      }
      lastAssigned = p.rank;
    }

    return sorted.slice(0, 100);
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
