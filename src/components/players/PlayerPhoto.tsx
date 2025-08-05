import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import ClubCoverImg from "@src/assets/img/playerFutbol.png";

export const PlayerPhoto = () => {
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
            src={ClubCoverImg}
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
