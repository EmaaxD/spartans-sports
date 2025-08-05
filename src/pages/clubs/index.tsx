import { useContext, useEffect, useMemo, useState } from "react";

import { clubsContext } from "@src/context/clubs";

import {
  AllClubsContainer,
  ContainerContentPage,
} from "@src/components/containers";
import { SportsLayout } from "@src/components/layouts";
import { HeaderClub } from "@src/components/UI";
import { EbookScreenSkeleton } from "@src/components/loadings";
import { ClubCard } from "@src/components/club";

const EbooksScreen = () => {
  const [loadingEbooks, setLoadingEbooks] = useState(true);

  const { clubs, handleSelectedClub } = useContext(clubsContext);

  const allClubs = useMemo(() => {
    return clubs
      .map((category) =>
        category.clubes.map((club) => ({
          ...club,
          category: category.category,
        }))
      )
      .flat();
  }, [clubs]);

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
                    <ClubCard
                      {...team}
                      category={team.category}
                      onHandleSelectedClub={() => handleSelectedClub(team)}
                    />
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
