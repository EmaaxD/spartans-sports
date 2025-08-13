import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { playersContext } from "@src/context/players";

import { MainContainer } from "@src/components/containers";

import { FichaTecnicaDeportiva } from "@src/components/players";

const PlayerScreen = () => {
  const { handleSelectedPlayer } = useContext(playersContext);

  // get playerId from router
  const router = useRouter();
  const { playerId } = router.query;

  useEffect(() => {
    if (typeof playerId === "string") {
      // Fetch player data or perform any action with playerId
      handleSelectedPlayer(playerId);
    }
  }, [playerId]);

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
