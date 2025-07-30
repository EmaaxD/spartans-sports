// Tipos para clubes y jugadores
export interface Player {
  name: string;
  position: string;
  value: number;
  age: number;
  presentationVideo: string;
}

export interface Club {
  _id: string;
  name: string;
  logo: string | any; // Puede ser string o imagen importada
  description: string;
  location: string;
  established: string;
  presentationVideo: string;
  players: Player[];
}

export interface Category {
  category: string;
  clubes: Club[];
}

export interface PlayerWithCategory extends Player {
  category: string;
  clubName: string;
  clubId: string;
  clubLogo: string | any;
}

// Función utilitaria para obtener todos los jugadores con su categoría
export const getAllPlayersWithCategory = (
  clubes: Category[]
): PlayerWithCategory[] => {
  const players: PlayerWithCategory[] = [];

  clubes.forEach((category: Category) => {
    category.clubes.forEach((club: Club) => {
      club.players.forEach((player: Player) => {
        players.push({
          ...player,
          category: category.category,
          clubName: club.name,
          clubId: club._id,
          clubLogo: club.logo,
        });
      });
    });
  });

  return players;
};
