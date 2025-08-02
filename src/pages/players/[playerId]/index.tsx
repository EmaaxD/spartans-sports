import { MainContainer } from "@src/components/containers";

import { PlayerPhoto, FichaTecnicaDeportiva } from "@src/components/players";

const PlayerScreen = () => {
  return (
    <>
      <MainContainer>
        <div className="w-full flex flex-col md:flex-row gap-10 my-40">
          <PlayerPhoto />

          <div className="w-full">
            <FichaTecnicaDeportiva />
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default PlayerScreen;
