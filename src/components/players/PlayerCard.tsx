import Image from "next/image";
import Link from "next/link";

import { PlayerCardProps } from "@src/interfaces";

import { LazyProdVideo } from "../UI";

export const PlayerCard: React.FC<PlayerCardProps> = ({
  age,
  category,
  clubName,
  clubLogo,
  name,
  position,
  clubId,
  presentationVideo,
  value,
}) => {
  return (
    <Link href={`/players/${clubId}`} className="no-underline">
      <div className="bg-white/20 shadow-lg rounded-lg flex flex-col gap-5">
        <div className="relative w-full h-32">
          <Image
            src={clubLogo.src}
            alt="Player Name"
            width={2000}
            height={2000}
            className="w-full h-full object-cover rounded-t-lg"
          />

          <LazyProdVideo src={presentationVideo} poster={clubLogo.src} />
        </div>

        <div className="flex flex-col gap-1 px-3 mb-2">
          <h3 className="text-lg font-semibold text-gray-200">{name}</h3>
          <p className="text-sm text-gray-300">Posición: {position}</p>
          <p className="text-sm text-gray-300">Edad: {age}</p>
          <p className="text-sm text-gray-300">Valor: ${value}k</p>
          <p className="text-sm text-gray-300">Categoría: {category}</p>
          <p className="text-sm text-gray-300">
            Club: <span className="font-bold">{clubName}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
