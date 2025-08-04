import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { BsCalendarDate } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import { useAllPlayers, useI18n } from "@src/hooks";

import { MainContainer } from "@src/components/containers";
import { EbookDetailsSkeleton } from "@src/components/loadings";
import { PlayerCard } from "@src/components/players";

import ClubImage from "@src/assets/img/Encabezado-GoClub-Mobile.png";

const SelectedEbookScreen = () => {
  const [loadingEbooks, setLoadingEbooks] = useState(true);

  const allPlayersWithCategory = useAllPlayers();

  // get the id from the url params with nextjs
  const router = useRouter();
  const { ebookId } = router.query;

  const { t } = useI18n();

  useEffect(() => {
    // set loading state to false after 1000ms
    const timer = setTimeout(() => {
      setLoadingEbooks(false);
    }, 1000);
  }, []);

  if (loadingEbooks)
    return (
      <div className="mt-20">
        <MainContainer>
          <EbookDetailsSkeleton />
        </MainContainer>
      </div>
    );

  return (
    <>
      <MainContainer>
        <div className="w-full flex flex-col md:flex-row gap-10 my-40">
          <div className="flex flex-col items-center gap-5">
            <div className="w-60 h-60">
              <Image
                src={ClubImage}
                alt="Club Image"
                className="w-full h-full object-cover rounded-full"
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
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-200">
                Nombre del Club
              </h1>
              <p className="text-base text-gray-400">Futbol</p>
            </div>

            <p className="text-lg text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              eligendi asperiores maiores rerum modi laudantium vel quibusdam
              repudiandae minus cupiditate labore accusantium, temporibus id
              officiis architecto porro! Eveniet, eaque voluptatibus! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Sint veniam
              adipisci consequatur architecto debitis obcaecati beatae culpa
              modi? Unde aliquid, ex qui eos enim aspernatur aliquam obcaecati
              accusantium officiis voluptatibus. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ea repudiandae ab velit temporibus
              rem quis distinctio facere eligendi earum maxime deserunt, neque
              alias sapiente eum officia a itaque minus eveniet.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <BsCalendarDate className="text-gray-500" size={20} />
                <span className="text-gray-400">{t("founded")}:</span>
                <span className="text-gray-200 font-semibold">2020</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-gray-500" size={20} />
                <span className="text-gray-400">{t("members")}:</span>
                <span className="text-gray-200 font-semibold">100</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationSharp className="text-gray-500" size={20} />
                <span className="text-gray-400">{t("location")}:</span>
                <span className="text-gray-200 font-semibold">
                  Ciudad, País
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-10">
              <h2 className="text-xl font-bold text-gray-200">
                {t("players")}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {allPlayersWithCategory.slice(0, 10).map((team, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={`${index + 1 * 2}00`}
                  >
                    <PlayerCard {...team} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default SelectedEbookScreen;
