import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDollarSign, FaTrophy, FaUser, FaMapMarkerAlt } from "react-icons/fa";

import { PlayerCardProps } from "@src/interfaces";

import PlayerOneImg from "@src/assets/img/playerFutbol.png";
import PlayerTwoImg from "@src/assets/img/playerTwo.png";
import PlayerThreeImg from "@src/assets/img/playerThree.png";
import PlayerFourImg from "@src/assets/img/playerFour.png";
import PlayerFiveImg from "@src/assets/img/playerFive.png";
import PlayerSixImg from "@src/assets/img/playerSix.png";
import SpartansCoinImg from "@src/assets/img/logos/spartanCoin.png";
import { formatPrice } from "@src/utils/functions";

const images = [
  PlayerOneImg,
  PlayerTwoImg,
  PlayerThreeImg,
  PlayerFourImg,
  PlayerFiveImg,
  PlayerSixImg,
];

export const PlayerCard: React.FC<PlayerCardProps> = ({
  age,
  category,
  clubName,
  clubLogo,
  name,
  position,
  clubId,
  value,
  colorCard,
  presentationVideo,
  playerImg,
  playerId,
  height,
  weight,
  ims,
}) => {
  const selectedImg = useMemo(() => {
    const idx = Math.floor(Math.random() * images.length);
    return images[idx];
  }, []);

  return (
    <Link
      href={`/players/${playerId}`}
      className="no-underline block transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
    >
      <div className="relative w-80 h-fit mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 shadow-2xl border border-blue-500/20 pb-4">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-cyan-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

        {/* Header con categoria */}
        <div className="relative z-10 p-4 flex justify-between items-start">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full">
            <span className="text-white text-xs font-bold uppercase tracking-wide">
              {category}
            </span>
          </div>

          {/* Spartans Coin */}
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
            <Image
              src={SpartansCoinImg}
              alt="Spartans Coin"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
        </div>

        {/* Imagen del jugador - Área principal grande */}
        <div className="relative z-20 flex justify-center px-4 mt-2">
          <div className="relative w-full max-w-xs">
            {/* Contenedor principal de la imagen - más grande */}
            <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20 p-2 shadow-xl">
              <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                <Image
                  src={
                    playerImg &&
                    typeof playerImg === "string" &&
                    playerImg.trim() !== ""
                      ? playerImg
                      : selectedImg
                  }
                  alt={name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain p-2"
                  priority
                />
              </div>
            </div>
            {/* Glow effect mejorado para la imagen más grande */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl opacity-40 blur-xl"></div>
          </div>
        </div>

        {/* Información del jugador - Expandida */}
        <div className="relative z-10 px-4 pb-4 text-center">
          <h3 className="text-white text-lg font-bold mb-1 truncate capitalize">
            {name}
          </h3>
          <p className="text-blue-200 text-sm font-medium mb-3">{position}</p>

          {/* Stats row principales */}
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/20">
              <div className="text-white text-sm font-bold">{age}</div>
              <div className="text-blue-200 text-xs">Años</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/20">
              <div className="text-white text-sm font-bold">
                {height.toString().replace(" cm", "")}
              </div>
              <div className="text-blue-200 text-xs">cm</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/20">
              <div className="text-white text-sm font-bold">
                {weight.toString().replace(" kg", "")}
              </div>
              <div className="text-blue-200 text-xs">kg</div>
            </div>
          </div>

          {/* Stats adicionales */}
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-1.5 border border-blue-400/30">
              <div className="text-white text-sm font-bold">{ims || "N/A"}</div>
              <div className="text-blue-200 text-xs">IMC</div>
            </div>
            <div className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-1.5 border border-purple-400/30">
              <div className="text-white text-sm font-bold">
                {clubName
                  ? clubName.slice(0, 8) + (clubName.length > 8 ? "..." : "")
                  : "N/A"}
              </div>
              <div className="text-purple-200 text-xs">Club</div>
            </div>
          </div>

          {/* Valor del jugador */}
          <div className="bg-gradient-to-r from-yellow-600/80 to-orange-600/80 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/30 mb-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-white font-bold text-sm">
                {formatPrice(value)}
              </span>
            </div>
          </div>

          {/* Club info y ubicación */}
          <div className="flex items-center justify-center gap-1 text-blue-200 text-xs mb-2">
            <FaMapMarkerAlt className="text-blue-400" />
            <span className="truncate">{clubName}</span>
          </div>

          {/* Badge de estado */}
          <div className="flex justify-center">
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-medium border border-green-400/30">
              Activo
            </span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-400 opacity-60"></div>
        <div className="absolute top-1/2 right-0 w-1 h-16 bg-gradient-to-b from-purple-400 to-blue-400 opacity-60"></div>
      </div>
    </Link>
  );
};
