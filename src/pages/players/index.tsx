import React, { useContext, useEffect, useState } from "react";

import { SportsLayout } from "@src/components/layouts";
import {
  AllClubsContainer,
  ContainerContentPage,
} from "@src/components/containers";
import { HeaderClub } from "@src/components/UI";

import { PlayerCard } from "@src/components/players";
import { useI18n } from "@src/hooks";
import { playersContext } from "@src/context/players";

const PlayersScreen = () => {
  const [isClient, setIsClient] = useState(false);

  const { players } = useContext(playersContext);

  const { t } = useI18n();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Adaptador para convertir los datos del player al formato PlayerCard
  const adaptPlayerToCardFormat = (player: any) => {
    return {
      name: `${player.nombre || ""} ${player.apellido || ""}`.trim(),
      position: player.posicion || "N/A",
      age: player.edad || 0,
      value: player.value || 0,
      height: player.altura ? `${player.altura} cm` : "N/A",
      weight: player.peso ? `${player.peso} kg` : "N/A",
      ims: player.imc ? `${player.imc}` : "N/A",
      category: player.deporte || "General",
      clubName: player.escuelaClub || "Sin Club",
      clubId: player._id || "", // Usamos el _id del jugador para navegación
      playerId: player._id || "", // ID del jugador para la URL
      clubLogo: player.player_image || "", // Imagen del jugador como logo del club
      colorCard: player.sexo === "M" ? "#3B82F6" : "#EC4899", // Azul para masculino, rosa para femenino
      presentationVideo: "",
      playerImg: player.player_image || "", // Imagen principal del jugador
    };
  };

  if (!isClient) return null; // Evita render en el SSR

  return (
    <>
      <SportsLayout layoutId="players-screen">
        <ContainerContentPage>
          <HeaderClub title={t("players")} search={""} selectCategory={""} />

          <AllClubsContainer clubsScreen>
            {players && players.length > 0 ? (
              players.map((player, index) => {
                const adaptedPlayer = adaptPlayerToCardFormat(player);
                return (
                  <div
                    key={player._id || index}
                    data-aos="zoom-in"
                    data-aos-delay={`${index + 1 * 2}00`}
                  >
                    <PlayerCard {...adaptedPlayer} />
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500 text-lg">
                  {t("no_players_found") || "No se encontraron jugadores"}
                </p>
              </div>
            )}
          </AllClubsContainer>
        </ContainerContentPage>
      </SportsLayout>
    </>
  );
};

export default PlayersScreen;
