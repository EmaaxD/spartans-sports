import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { BsCalendarDate } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import { useAllPlayers, useI18n } from "@src/hooks";
import { clubsContext } from "@src/context/clubs";

import { MainContainer } from "@src/components/containers";
import { EbookDetailsSkeleton } from "@src/components/loadings";
import { PlayerCard } from "@src/components/players";

import ClubImage from "@src/assets/img/Encabezado-GoClub-Mobile.png";

const SelectedEbookScreen = () => {
  const [loadingEbooks, setLoadingEbooks] = useState(true);

  const { selectedClub, handleGetClub } = useContext(clubsContext);

  const allPlayersWithCategory = useAllPlayers();

  // get the id from the url params with nextjs
  const router = useRouter();
  const { clubId } = router.query;

  const { t } = useI18n();

  useEffect(() => {
    if (typeof clubId === "string") {
      handleGetClub(clubId);
      // set loading state to false after the club is fetched
      const timer = setTimeout(() => {
        setLoadingEbooks(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [clubId, handleGetClub]);

  if (loadingEbooks || !selectedClub)
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
                src={selectedClub?.logo || ClubImage}
                alt={selectedClub?.name || "Club Logo"}
                width={240}
                height={240}
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
                {selectedClub?.name}
              </h1>
              <p className="text-base text-gray-400">
                {selectedClub?.category}
              </p>
            </div>

            <p className="text-lg text-gray-400">{selectedClub?.description}</p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <BsCalendarDate className="text-gray-500" size={20} />
                <span className="text-gray-400">{t("founded")}:</span>
                <span className="text-gray-200 font-semibold">
                  {selectedClub?.established}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-gray-500" size={20} />
                <span className="text-gray-400">{t("members")}:</span>
                <span className="text-gray-200 font-semibold">
                  {selectedClub?.players.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationSharp className="text-gray-500" size={20} />
                <span className="text-gray-400">{t("location")}:</span>
                <span className="text-gray-200 font-semibold">
                  {selectedClub?.location || "Ciudad, País"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-10">
              <h2 className="text-xl font-bold text-gray-200">
                {t("players")} ({selectedClub?.players?.length || 0})
              </h2>

              {selectedClub?.players && selectedClub.players.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {selectedClub.players.slice(0, 10).map((team, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-delay={`${index + 1 * 2}00`}
                    >
                      <PlayerCard
                        {...team}
                        category={selectedClub.category || ""}
                        clubId={selectedClub._id || ""}
                        clubLogo={selectedClub.logo}
                        clubName={selectedClub.name || ""}
                        playerId={`${selectedClub._id}-${index}`}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-400 text-lg">
                    No hay jugadores registrados en este club.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default SelectedEbookScreen;
