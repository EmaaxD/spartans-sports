import { useContext, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { playersContext } from "@src/context/players";

import { CarouselContainer } from "../containers";

import { top100Players } from "@src/utils/const";

import ClubCoverImg from "@src/assets/img/playerFutbol.png";
import SpartansCoinImg from "@src/assets/img/logos/spartanCoin.png";
import {
  formatPrice,
  getPlayerRank,
  limitCaracterString,
} from "@src/utils/functions";
import { TopPlayerCardProps } from "@src/interfaces";

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
  playerValue,
  posicion,
  rank,
  rowNumber,
  sentadillaProfunda,
  sexo,
  tmb,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

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
      <div className="relative w-full h-full rounded-lg flex justify-center items-center shadow-lg overflow-hidden">
        <div className="flex flex-col w-44">
          <Image
            src={ClubCoverImg}
            alt="Player Cover"
            className="h-full w-full rounded-lg"
            width={2400}
            height={2400}
          />
        </div>
      </div>

      <div className="absolute top-2 right-3">
        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent font-extrabold text-base drop-shadow-lg shadow-orange-500/50">
          $ US {formatPrice(playerValue) || "Unknown Club"}
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
