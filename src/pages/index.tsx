import { useContext } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

import { clubsContext } from "@src/context/clubs";
import { playersContext } from "@src/context/players";

import {
  AllClubsContainer,
  CarouselContainer,
  ClubsHomeContainer,
  JoinUsContainer,
} from "@src/components/containers";
import { ClubCard } from "@src/components/club";
import { ClientOnly } from "@src/components/HOC";

import { joinUsData } from "@src/utils/const";

// Dynamic imports SOLAMENTE - eliminar imports estáticos para evitar conflictos
const DynamicMainBanner = dynamic(() => import("@src/components/home").then(mod => ({ default: mod.MainBanner })), { ssr: false });
const DynamicTopClubs = dynamic(() => import("@src/components/home").then(mod => ({ default: mod.TopClubs })), { ssr: false });
const DynamicTopPlayers = dynamic(() => import("@src/components/home").then(mod => ({ default: mod.TopPlayers })), { ssr: false });
const DynamicTopPlayersFemale = dynamic(() => import("@src/components/home").then(mod => ({ default: mod.TopPlayersFemale })), { ssr: false });
const DynamicJoinUsCard = dynamic(() => import("@src/components/home").then(mod => ({ default: mod.JoinUsCard })), { ssr: false });
const DynamicSponsorsSection = dynamic(() => import("@src/components/home").then(mod => ({ default: mod.SponsorsSection })), { ssr: false });

export default function Home() {
  const { clubs, handleSelectedClub } = useContext(clubsContext);
  const { players, top100PlayersFemaleMemo } = useContext(playersContext);

  const { t } = useTranslation("common");

  return (
    <ClientOnly>
      <div className="flex flex-col gap-6 pb-10">
        <DynamicMainBanner />

        <ClubsHomeContainer
          idSection="topClubsSection"
          titleSection={t("greeting")}
        >
          <DynamicTopClubs />
        </ClubsHomeContainer>

        {players && players.length > 0 && (
          <ClubsHomeContainer
            idSection="topPlayersSection"
            titleSection={t("top100Players")}
          >
            <DynamicTopPlayers />
          </ClubsHomeContainer>
        )}

        {top100PlayersFemaleMemo && top100PlayersFemaleMemo.length > 0 && (
          <ClubsHomeContainer
            idSection="topPlayersFemaleSection"
            titleSection={t("top100PlayersFemale")}
          >
            <DynamicTopPlayersFemale />
          </ClubsHomeContainer>
        )}

        {clubs &&
          clubs.length > 0 &&
          clubs.slice(0, 7).map((club, index) => (
            <ClubsHomeContainer
              key={index}
              idSection="clubsSection"
              titleSection={club.category}
            >
              {club.clubes.length > 2 ? (
                <CarouselContainer>
                  {club.clubes.map((team, index) => (
                    <div key={team._id}>
                      <ClubCard
                        {...team}
                        category={club.category}
                        onHandleSelectedClub={() =>
                          handleSelectedClub({
                            ...team,
                            category: club.category,
                          })
                        }
                      />
                    </div>
                  ))}
                </CarouselContainer>
              ) : (
                <AllClubsContainer>
                  {club.clubes.map((team, index) => (
                    <div key={team._id}>
                      <ClubCard
                        {...team}
                        category={club.category}
                        onHandleSelectedClub={() =>
                          handleSelectedClub({
                            ...team,
                            category: club.category,
                          })
                        }
                      />
                    </div>
                  ))}
                </AllClubsContainer>
              )}
            </ClubsHomeContainer>
          ))}

        <ClubsHomeContainer
          idSection="joinUsSection"
          titleSection={t("joinUsSectionTitle")}
        >
          <JoinUsContainer>
            {joinUsData.map((item, index) => (
              <div key={item.id}>
                <DynamicJoinUsCard {...item} />
              </div>
            ))}
          </JoinUsContainer>
        </ClubsHomeContainer>

        <DynamicSponsorsSection />
      </div>
    </ClientOnly>
  );
}
