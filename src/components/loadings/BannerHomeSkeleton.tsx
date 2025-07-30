import Skeleton from "react-loading-skeleton";

export const BannerHomeSkeleton = () => {
  return (
    <>
      <div className="flex flex-col">
        <Skeleton width="100%" height={250} borderRadius={15} />
      </div>
    </>
  );
};
