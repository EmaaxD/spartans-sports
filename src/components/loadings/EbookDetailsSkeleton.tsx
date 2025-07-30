import Skeleton from "react-loading-skeleton";

export const EbookDetailsSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <Skeleton width="100%" height={40} />
          <Skeleton width="100%" height={40} />
          <Skeleton width="100%" height={40} />
        </div>

        <Skeleton width="100%" height={500} />
      </div>
    </>
  );
};
