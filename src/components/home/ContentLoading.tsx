import { BannerHomeSkeleton, ClubCardSkeleton } from "@src/components/loadings";
import { MainContainer } from "../containers";

export const ContentLoading = () => {
  return (
    <>
      <MainContainer>
        <div className="mt-10 flex flex-col gap-10 mb-5">
          <BannerHomeSkeleton />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 10 }, (_, index) => (
              <ClubCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </MainContainer>
    </>
  );
};
