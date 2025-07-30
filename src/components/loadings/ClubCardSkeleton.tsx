import Skeleton from "react-loading-skeleton";

export const ClubCardSkeleton = () => {
  return (
    <>
      <div className="flex flex-col">
        <Skeleton width="100%" height={400} />
      </div>
    </>
  );
};
