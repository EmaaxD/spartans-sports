import { createContext, useReducer, PropsWithChildren, useEffect } from "react";

import { ClubsProviderProps, SelectedClubProps } from "@src/interfaces";

import { clubsReducer, initialClubsState } from "./clubsReducer";

import { clubes } from "@src/utils/const";

export const clubsContext = createContext({} as ClubsProviderProps);

export const ClubsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(clubsReducer, initialClubsState);

  const handleGetClubs = async () => {
    try {
      setTimeout(() => {
        dispatch({ type: "SET_CLUBS", payload: clubes });
      }, 1000);
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const handleGetClub = async (clubId: string) => {
    try {
      // Buscar el club en todas las categorías
      for (const category of clubes) {
        const foundClub = category.clubes.find(club => club._id === clubId);
        if (foundClub) {
          // Disparar el dispatch SELECT_CLUB con el club encontrado
          dispatch({ 
            type: "SELECT_CLUB", 
            payload: {
              ...foundClub,
              category: category.category
            }
          });
          return;
        }
      }
      
      // Si no se encuentra el club, disparar con null
      dispatch({ type: "SELECT_CLUB", payload: null });
    } catch (error) {
      console.error('Error al obtener el club:', error);
      dispatch({ type: "SELECT_CLUB", payload: null });
    }
  }

  const handleSelectedClub = (club: SelectedClubProps | null) =>
    dispatch({ type: "SELECT_CLUB", payload: club });

  useEffect(() => {
    if (state.clubs.length === 0) {
      handleGetClubs();
    }
  }, []);

  return (
    <clubsContext.Provider value={{ ...state, handleSelectedClub, handleGetClub }}>
      {children}
    </clubsContext.Provider>
  );
};
