import { useContext, useEffect, useState } from "react";
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
import {
  ContentLoading,
  JoinUsCard,
  MainBanner,
  SponsorsSection,
  TopClubs,
  TopPlayers,
  TopPlayersFemale,
} from "@src/components/home";
import { ClubCard } from "@src/components/club";
import { NoSSR } from "@src/components/HOC";

import { joinUsData } from "@src/utils/const";

// Dynamic imports para componentes problemáticos
const DynamicMainBanner = dynamic(() => import("@src/components/home").then(mod => ({ default: mod.MainBanner })), { ssr: false });
const DynamicTopClubs = dynamic(() => import("@src/components/home").then(mod => ({ default: mod.TopClubs })), { ssr: false });
const DynamicTopPlayers = dynamic(() => import("@src/components/home").then(mod => ({ default: mod.TopPlayers })), { ssr: false });
const DynamicTopPlayersFemale = dynamic(() => import("@src/components/home").then(mod => ({ default: mod.TopPlayersFemale })), { ssr: false });

export default function Home() {
  const { clubs, handleSelectedClub } = useContext(clubsContext);
  const { players, top100PlayersFemaleMemo } = useContext(playersContext);

  const { t } = useTranslation("common");

  return (
    <NoSSR>
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
                    <div
                      key={team._id}
                      data-aos="zoom-in"
                      data-aos-delay={`${index + 1 * 2}00`}
                    >
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
                    <div
                      key={team._id}
                      data-aos="zoom-in"
                      data-aos-delay={`${index + 1 * 2}00`}
                    >
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
              <div
                key={item.id}
                data-aos="zoom-in"
                data-aos-delay={`${index + 1 * 2}00`}
              >
                <JoinUsCard {...item} />
              </div>
            ))}
          </JoinUsContainer>
        </ClubsHomeContainer>

        <SponsorsSection />
      </div>
    </NoSSR>
  );
}
