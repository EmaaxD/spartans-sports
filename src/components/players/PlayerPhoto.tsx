import Image from "next/image";
import { PlayerPhotoProps } from "@src/interfaces";

export const PlayerPhoto: React.FC<PlayerPhotoProps> = ({ player_image }) => {
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
            src={player_image}
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
