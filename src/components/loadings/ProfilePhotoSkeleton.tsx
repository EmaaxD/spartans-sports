import Skeleton from "react-loading-skeleton";

export const ProfilePhotoSkeleton = () => {
  return (
    <>
      <div className="flex">
        <Skeleton width={80} height={80} circle={true} />
      </div>
    </>
  );
};
