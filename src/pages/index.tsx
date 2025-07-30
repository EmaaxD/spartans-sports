import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
} from "@src/components/home";
import { ClubCard } from "@src/components/club";

import { clubes, joinUsData } from "@src/utils/const";

export default function Home() {
  const [loadingEbooks, setLoadingEbooks] = useState(true);

  const { t } = useTranslation("common");

  useEffect(() => {
    // set loading state to false after 1000ms
    const timer = setTimeout(() => {
      setLoadingEbooks(false);
    }, 1000);
  }, []);

  return (
    <>
      {loadingEbooks ? (
        <ContentLoading />
      ) : (
        <div className="flex flex-col gap-6 pb-10">
          <MainBanner />

          <ClubsHomeContainer
            idSection="topEbooksSection"
            titleSection={t("greeting")}
          >
            <TopClubs />
          </ClubsHomeContainer>

          {clubes &&
            clubes.length > 0 &&
            clubes.slice(0, 7).map((club, index) => (
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
                        <ClubCard {...team} category={club.category} />
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
                        <ClubCard {...team} category={club.category} />
                      </div>
                    ))}
                  </AllClubsContainer>
                )}
              </ClubsHomeContainer>
            ))}

          <ClubsHomeContainer
            idSection="joinUsSection"
            titleSection="Más motivos para unirte"
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
      )}
    </>
  );
}
