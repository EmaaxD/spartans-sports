import Image from "next/image";
import Link from "next/link";
import { PlayerCardProps } from "@src/interfaces";
import { useI18n } from "@src/hooks";
import { BadgetInfo } from "./BadgetInfo";
import { PlayerCardFooter } from "./PlayerCardFooter";

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
  height,
  weight,
  ims,
}) => {
  const { t } = useI18n();

  return (
    <Link href={`/players/${clubId}`} className="no-underline">
      <div className="relative flex flex-col">
        <div
          className="relative p-2 rounded-md"
          style={{
            backgroundColor: colorCard,
          }}
        >
          <div className="absolute bg-indigo-950 top-0 left-0 py-1 px-3 rounded-br-lg z-10">
            <span className="text-white uppercase text-xs">
              Sport <span className="font-bold">{category}</span>
            </span>
          </div>

          <div className="absolute top-3 right-4 z-10">
            <div className="w-12 h-12">
              <Image
                src={clubLogo}
                alt={clubName}
                width={2000}
                height={2000}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>

          <div className="bg-player relative bg-white flex justify-between px-3 pt-10 pb-40 rounded-t-lg">
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
              <div className="w-40 h-40">
                <Image
                  src={playerImg}
                  alt={name}
                  width={2000}
                  height={2000}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <PlayerCardFooter
          name={name}
          position={position}
          age={age}
          value={value}
          height={height}
          weight={weight}
          ims={ims}
          colorCard={colorCard}
        />
      </div>
    </Link>
  );
};
