import Skeleton from "react-loading-skeleton";

export const HeaderSkeleton = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Skeleton width={40} height={40} circle={true} />
          <Skeleton width={100} height={20} />
        </div>
        <Skeleton width={400} height={20} />
      </div>
    </>
  );
};
