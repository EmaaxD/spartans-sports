import { FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import { MainContainer } from "@src/components/containers";
import { LazyLocalVideo } from "@src/components/UI";

import ClubCoverImg from "@src/assets/img/Encabezado-GoClub-Mobile.png";

const PlayerScreen = () => {
  return (
    <>
      <MainContainer>
        <div className="w-full flex flex-col md:flex-row gap-10 my-40">
          <div className="flex flex-col items-center gap-5">
            <div className="w-60">
              <LazyLocalVideo
                src={
                  "https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/videoPlayerFootboll.mp4"
                }
                poster={ClubCoverImg.src}
              />
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

          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-gray-300">Player Name</h1>
            <p className="text-lg text-gray-200">Position: Forward</p>
            <p className="text-lg text-gray-200">Age: 25</p>
            <p className="text-lg text-gray-200">Value: $500k</p>
            <p className="text-lg text-gray-200">Category: Professional</p>
            <p className="text-lg text-gray-200">
              Club: <span className="font-bold">Club Name</span>
            </p>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default PlayerScreen;
