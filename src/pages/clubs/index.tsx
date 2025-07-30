import { useEffect, useMemo, useState } from "react";

import {
  AllClubsContainer,
  ContainerContentPage,
} from "@src/components/containers";
import { SportsLayout } from "@src/components/layouts";
import { HeaderClub } from "@src/components/UI";
import { EbookScreenSkeleton } from "@src/components/loadings";
import { ClubCard } from "@src/components/club";
import { clubes } from "@src/utils/const";

const EbooksScreen = () => {
  const [loadingEbooks, setLoadingEbooks] = useState(true);

  const allClubs = useMemo(() => {
    return clubes
      .map((category) =>
        category.clubes.map((club) => ({
          ...club,
          category: category.category,
        }))
      )
      .flat();
  }, [clubes]);

  useEffect(() => {
    // set loading state to false after 1000ms
    const timer = setTimeout(() => {
      setLoadingEbooks(false);
    }, 1000);
  }, []);

  return (
    <>
      <SportsLayout layoutId="clubs-screen">
        <ContainerContentPage>
          {loadingEbooks ? (
            <EbookScreenSkeleton />
          ) : (
            <>
              <HeaderClub title="Clubes" search={""} selectCategory={""} />
              <AllClubsContainer clubsScreen>
                {allClubs.map((team, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={`${index + 1 * 2}00`}
                  >
                    <ClubCard {...team} category={team.category} />
                  </div>
                ))}
              </AllClubsContainer>
            </>
          )}
        </ContainerContentPage>
      </SportsLayout>
    </>
  );
};

export default EbooksScreen;
