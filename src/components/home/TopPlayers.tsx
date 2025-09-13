import { useContext, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { TopPlayerCardProps } from "@src/interfaces";

import { playersContext } from "@src/context/players";

import { CarouselContainer } from "../containers";

import { formatPrice, limitCaracterString } from "@src/utils/functions";

import PlayerOneImg from "@src/assets/img/playerFutbol.png";
import PlayerTwoImg from "@src/assets/img/playerTwo.png";
import PlayerThreeImg from "@src/assets/img/playerThree.png";
import PlayerFourImg from "@src/assets/img/playerFour.png";
import PlayerFiveImg from "@src/assets/img/playerFive.png";
import PlayerSixImg from "@src/assets/img/playerSix.png";

import PlayerFemaleOneImg from "@src/assets/img/playerFemaleOne.png";
import PlayerFemaleTwoImg from "@src/assets/img/playerFemaleTwo.png";
import PlayerFemaleThreeImg from "@src/assets/img/playerFemaleThree.png";
import PlayerFemaleFourImg from "@src/assets/img/playerFemaleFour.png";
import PlayerFemaleFiveImg from "@src/assets/img/playerFemaleFive.png";
import PlayerFemaleSixImg from "@src/assets/img/playerFemaleSix.png";

import SpartansCoinImg from "@src/assets/img/logos/spartanCoin.png";

const images = [PlayerOneImg, PlayerTwoImg, PlayerThreeImg, PlayerSixImg];
const imagesFemale = [
  PlayerFemaleOneImg,
  PlayerFemaleTwoImg,
  PlayerFemaleThreeImg,
  PlayerFemaleFourImg,
  PlayerFemaleFiveImg,
  PlayerFemaleSixImg,
];

const TopPlayerCard: React.FC<TopPlayerCardProps> = ({
  _id,
  altura,
  alturaTorso,
  apellido,
  biotipo,
  brazoDirector,
  capacidadPulmonarTotal,
  capacidadPulmunarResidual,
  cintura,
  clase,
  contacto,
  coordinacion,
  deporte,
  playerImg,
  dorsiflexionTobilloDer,
  dorsiflexionTobilloIzq,
  edad,
  envergaduraBrazos,
  escuelaClub,
  fechaNacimiento,
  hombro,
  imc,
  indiceQ,
  lateralidad,
  localidad,
  manoDer,
  manoIzq,
  nombre,
  ojoDirector,
  peso,
  pieDer,
  pieIzq,
  piernaDirectora,
  piernaDominante,
  value,
  posicion,
  rank,
  rowNumber,
  sentadillaProfunda,
  sexo,
  tmb,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const selectedImg = useMemo(() => {
    if (sexo === "F") {
      const idx = Math.floor(Math.random() * imagesFemale.length);
      return imagesFemale[idx];
    }

    const idx = Math.floor(Math.random() * images.length);
    return images[idx];
  }, []);

  useEffect(() => {
    const obs = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShowVideo(true);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Link
      key={_id}
      href={`/players/${_id}`}
      className="relative w-full bg-slate-800 h-64 flex-shrink-0 outline-none rounded-lg overflow-hidden"
    >
      <div ref={ref}>
        {showVideo && (
          <video
            className="absolute w-60 md:w-full h-full rounded-lg object-cover opacity-40"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://spartans-sport-bucket.s3.sa-east-1.amazonaws.com/upload/bgPlayer.mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        )}
      </div>

      <div className="relative w-full h-96 rounded-lg flex justify-center items-start pt-8 shadow-lg overflow-hidden">
        {sexo === "M" ? (
          <div className="flex flex-col w-44">
            <Image
              src={playerImg ? playerImg : selectedImg}
              alt="Player Cover"
              className="h-full w-full rounded-lg object-cover object-top"
              width={2400}
              height={2400}
            />
          </div>
        ) : (
          <div className="flex flex-col w-60">
            <Image
              src={playerImg ? playerImg : selectedImg}
              alt="Player Cover"
              className="h-full w-full rounded-lg object-cover object-top"
              width={2400}
              height={2400}
            />
          </div>
        )}
      </div>

      <div className="absolute top-2 right-3">
        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent font-extrabold text-base drop-shadow-lg shadow-orange-500/50">
          US{" "}
          {(() => {
            const valuePlayer = Number(value);
            return !isNaN(valuePlayer) && valuePlayer > 0
              ? formatPrice(valuePlayer)
              : "0.00";
          })()}
        </span>
      </div>

      <div className="absolute w-12 h-12 bottom-3 right-1">
        <Image
          src={SpartansCoinImg}
          alt="Spartans Coin"
          width={50}
          height={50}
          className="w-full h-full inline-block"
        />
      </div>

      <div className="absolute top-2 left-2 bg-black/50 text-white font-bold text-3xl rounded-full w-10 h-10 flex items-center justify-center">
        {rank}
      </div>

      <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col gap-0 py-3 px-2">
        <span className="text-white font-bold text-lg capitalize">
          {limitCaracterString(nombre, 15)}
        </span>

        {escuelaClub && escuelaClub.length > 0 && (
          <span className="text-gray-400 font-bold text-sm">
            Club: {limitCaracterString(escuelaClub, 16)}
          </span>
        )}
      </div>
    </Link>
  );
};

export const TopPlayers = () => {
  const { top100PlayersMemo } = useContext(playersContext);

  if (top100PlayersMemo.length < 4)
    return (
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 overflow-hidden">
        {top100PlayersMemo.map((player) => (
          <TopPlayerCard key={player._id} {...player} />
        ))}
      </div>
    );

  return (
    <CarouselContainer>
      {top100PlayersMemo.map((player) => (
        <TopPlayerCard key={player._id} {...player} />
      ))}
    </CarouselContainer>
  );
};

export const TopPlayersFemale = () => {
  const { top100PlayersFemaleMemo } = useContext(playersContext);

  if (top100PlayersFemaleMemo.length < 4)
    return (
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 overflow-hidden">
        {top100PlayersFemaleMemo.map((player) => (
          <TopPlayerCard key={player._id} {...player} />
        ))}
      </div>
    );

  return (
    <CarouselContainer>
      {top100PlayersFemaleMemo.map((player) => (
        <TopPlayerCard key={player._id} {...player} />
      ))}
    </CarouselContainer>
  );
};
