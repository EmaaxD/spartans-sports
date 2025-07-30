import { ClubsHomeContainerProps } from "@src/interfaces";
import { MainContainer } from "./MainContainer";

export const ClubsHomeContainer: React.FC<ClubsHomeContainerProps> = ({
  idSection,
  titleSection,
  children,
}) => {
  return (
    <>
      <section id={idSection} className="w-full">
        <MainContainer>
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-xl lg:text-2xl font-bold">
              {titleSection}
            </h4>

            {children}
          </div>
        </MainContainer>
      </section>
    </>
  );
};
