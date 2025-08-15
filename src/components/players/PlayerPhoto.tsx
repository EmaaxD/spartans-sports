import { useMemo } from "react";
import Image from "next/image";

import PlayerOneImg from "@src/assets/img/playerFutbol.png";
import PlayerTwoImg from "@src/assets/img/playerTwo.png";
import PlayerThreeImg from "@src/assets/img/playerThree.png";
import PlayerFourImg from "@src/assets/img/playerFour.png";

const images = [PlayerOneImg, PlayerTwoImg, PlayerThreeImg, PlayerFourImg];

export const PlayerPhoto = () => {
  const selectedImg = useMemo(() => {
    const idx = Math.floor(Math.random() * images.length);
    return images[idx];
  }, []);

  return (
    <>
      <div className="relative flex justify-center items-center md:justify-normal md:items-start">
        {/* add video background with opacit */}
        <video
          className="absolute w-60 md:w-full h-full rounded-lg object-cover opacity-20"
          autoPlay
          loop
          muted
          src="https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/bgPlayer.mp4"
        ></video>
        <div className="relative w-60 md:w-52 rounded-lg flex items-center justify-center shadow-lg z-30 fire-border">
          <Image
            src={selectedImg}
            alt="Player Cover"
            className="h-full w-full rounded-lg"
            width={2400}
            height={2400}
          />
        </div>
      </div>
    </>
  );
};
