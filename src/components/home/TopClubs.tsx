import Link from "next/link";
import Image from "next/image";

import { CarouselContainer } from "../containers";
import { top10Clubs } from "@src/utils/const";

export const TopClubs: React.FC = () => {
  if (top10Clubs.length < 4)
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {top10Clubs.map((show) => (
          <div key={show.clubId} className="relative w-full h-64 flex-shrink-0">
            <div className="relative w-full h-full">
              <Image
                src={show.club.logo || ""}
                alt={show.club.name || ""}
                width={2000}
                height={2000}
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="absolute top-2 left-2 bg-black/50 text-white font-bold text-3xl rounded-full w-10 h-10 flex items-center justify-center">
              {show.rank}
            </div>
            <div className="w-full absolute bottom-0 left-0 text-white font-bold bg-gradient-to-t from-black/70 to-transparent py-3 px-2">
              {show.club.name}
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <CarouselContainer>
      {top10Clubs.map((show) => (
        <Link
          key={show.clubId}
          href={`/clubs/${show.clubId}`}
          className="relative w-full h-64 flex-shrink-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={show.club.logo || ""}
              alt={show.club.name || ""}
              width={2000}
              height={2000}
              className="w-full h-full rounded-lg"
            />
          </div>

          <div className="absolute top-2 left-2 bg-black/50 text-white font-bold text-3xl rounded-full w-10 h-10 flex items-center justify-center">
            {show.rank}
          </div>

          <div className="w-full absolute bottom-0 left-0 text-white font-bold bg-gradient-to-t rounded-full from-black/70 to-transparent py-3 px-2">
            {show.club.name}
          </div>
        </Link>
      ))}
    </CarouselContainer>
  );
};
