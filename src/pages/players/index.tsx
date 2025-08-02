import React, { useEffect, useState } from "react";

import { SportsLayout } from "@src/components/layouts";
import {
  AllClubsContainer,
  ContainerContentPage,
} from "@src/components/containers";
import { HeaderClub } from "@src/components/UI";
import { useAllPlayers } from "@src/hooks/usePlayers";
import { PlayerCard } from "@src/components/players";
import { useI18n } from "@src/hooks";

const PlayersScreen = () => {
  const [isClient, setIsClient] = useState(false);

  // Obtener todos los jugadores con su categoría usando el hook personalizado
  const allPlayersWithCategory = useAllPlayers();

  const { t } = useI18n();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Evita render en el SSR

  return (
    <>
      <SportsLayout layoutId="players-screen">
        <ContainerContentPage>
          <HeaderClub title={t("players")} search={""} selectCategory={""} />

          <AllClubsContainer clubsScreen>
            {allPlayersWithCategory.map((team, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={`${index + 1 * 2}00`}
              >
                <PlayerCard {...team} />
              </div>
            ))}
          </AllClubsContainer>
        </ContainerContentPage>
      </SportsLayout>
    </>
  );
};

export default PlayersScreen;
