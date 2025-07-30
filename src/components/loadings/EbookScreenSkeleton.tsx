import Skeleton from "react-loading-skeleton";

export const EbookScreenSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <Skeleton width={150} height={30} />
          <Skeleton width={350} height={30} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index + 1 * 2}00`}
            >
              <Skeleton width="100%" height={300} borderRadius={15} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
