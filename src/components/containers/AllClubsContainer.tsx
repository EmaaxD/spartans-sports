import { AllClubsContainerProps } from "@src/interfaces";

export const AllClubsContainer: React.FC<AllClubsContainerProps> = ({
  clubsScreen = false,
  children,
}) => {
  return (
    <>
      <div
        className={`grid grid-cols-2 ${
          clubsScreen
            ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        } gap-4 overflow-visible`}
      >
        {children}
      </div>
    </>
  );
};
