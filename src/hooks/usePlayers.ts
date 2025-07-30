import { useMemo } from "react";
import { clubes } from "@src/utils/const";
import { PlayerWithCategory, getAllPlayersWithCategory } from "@src/interfaces";

// Hook personalizado para obtener todos los jugadores con su categoría
export const useAllPlayers = () => {
  const allPlayersWithCategory = useMemo(() => {
    return getAllPlayersWithCategory(clubes);
  }, []);

  return allPlayersWithCategory;
};

// Hook personalizado para filtrar jugadores por categoría
export const usePlayersByCategory = (category?: string) => {
  const allPlayers = useAllPlayers();
  
  const filteredPlayers = useMemo(() => {
    if (!category) return allPlayers;
    return allPlayers.filter(player => player.category === category);
  }, [allPlayers, category]);

  return filteredPlayers;
};

// Hook personalizado para agrupar jugadores por categoría
export const usePlayersGroupedByCategory = () => {
  const allPlayers = useAllPlayers();
  
  const groupedPlayers = useMemo(() => {
    const grouped: { [key: string]: PlayerWithCategory[] } = {};
    
    allPlayers.forEach(player => {
      if (!grouped[player.category]) {
        grouped[player.category] = [];
      }
      grouped[player.category].push(player);
    });
    
    return grouped;
  }, [allPlayers]);

  return groupedPlayers;
};

// Hook personalizado para buscar jugadores por nombre
export const useSearchPlayers = (searchTerm: string) => {
  const allPlayers = useAllPlayers();
  
  const searchResults = useMemo(() => {
    if (!searchTerm) return allPlayers;
    
    const lowercaseSearch = searchTerm.toLowerCase();
    return allPlayers.filter(player => 
      player.name.toLowerCase().includes(lowercaseSearch) ||
      player.position.toLowerCase().includes(lowercaseSearch) ||
      player.category.toLowerCase().includes(lowercaseSearch) ||
      player.clubName.toLowerCase().includes(lowercaseSearch)
    );
  }, [allPlayers, searchTerm]);

  return searchResults;
};
