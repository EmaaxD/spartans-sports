import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import ClubCoverImg from "@src/assets/img/playerFutbol.png";

export const PlayerPhoto = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <div className="bg-white w-60 h-60 rounded-lg flex items-center justify-center shadow-lg animated-border-seventSection">
            <Image
              src={ClubCoverImg}
              alt="Player Cover"
              className="h-full w-full rounded-lg"
              width={2400}
              height={2400}
            />
            {/* Lluvia de Bitcoins */}
            <div className="bitcoin-rain-container">
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
              <div className="bitcoin-coin">₿</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl text-gray-500" size={25} />
          </a>
          <a
            href="https://spartans-sport.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbWorldWww className="text-xl text-gray-500" size={25} />
          </a>
        </div>
      </div>
    </>
  );
};
