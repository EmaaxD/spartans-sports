import { MainContainer } from "@src/components/containers";

import { FichaTecnicaDeportiva } from "@src/components/players";

const PlayerScreen = () => {
  return (
    <>
      <MainContainer>
        <div className="w-full flex flex-col md:flex-row gap-10 my-40">
          <FichaTecnicaDeportiva />
        </div>
      </MainContainer>
    </>
  );
};

export default PlayerScreen;
