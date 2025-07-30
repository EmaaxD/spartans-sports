import { SportsLayoutProps } from "@src/interfaces";
import { MainContainer, SecondMainContainer } from "../containers";

export const SportsLayout: React.FC<SportsLayoutProps> = ({
  layoutId,
  children,
}) => {
  return (
    <>
      <div id={layoutId} className="w-full min-h-screen h-full">
        <MainContainer>
          <div className="pt-28 sm:pt-36 pb-20">
            <SecondMainContainer>{children}</SecondMainContainer>
          </div>
        </MainContainer>
      </div>
    </>
  );
};
