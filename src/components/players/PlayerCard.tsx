import Image from "next/image";
import Link from "next/link";
import { PlayerCardProps } from "@src/interfaces";
import { useI18n } from "@src/hooks";

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
  const { t } = useI18n();

  return (
    <Link href={`/players/${clubId}`} className="no-underline">
      <div className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-center p-3">
          <div className="bg-white/20 px-2 py-1 rounded text-sm font-semibold">
            SPORT NAME
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-pink-500 rounded-full" />{" "}
            {/* Badge icon */}
            <div className="w-6 h-4 bg-white border border-gray-300 rounded-sm" />{" "}
            {/* Country flag placeholder */}
          </div>
        </div>

        {/* Player image */}
        <div className="flex justify-center items-center mt-2">
          <Image
            src={clubLogo.src}
            alt={name}
            width={120}
            height={120}
            className="rounded-full border-4 border-white object-contain"
          />
        </div>

        {/* Atributos 99 */}
        <div className="grid grid-cols-2 gap-2 mt-4 px-4 text-center text-sm font-bold">
          <div className="bg-white/10 rounded py-1">INFO 99</div>
          <div className="bg-white/10 rounded py-1">INFO 99</div>
          <div className="bg-white/10 rounded py-1">INFO 99</div>
          <div className="bg-white/10 rounded py-1">INFO 99</div>
        </div>

        {/* Número de camiseta grande */}
        <div className="text-right px-4 mt-4">
          <span className="text-6xl font-extrabold opacity-20">{clubId}</span>
        </div>

        {/* Información inferior */}
        <div className="px-4 pb-4">
          <h3 className="text-lg font-bold uppercase">{name}</h3>
          <p className="text-sm opacity-80">
            {t("position")}: {t(position)}
          </p>
          <p className="text-sm opacity-80">
            {t("age")}: {age} - {t("value")}: ${value}k
          </p>
          <p className="text-sm opacity-80">
            Club: <span className="font-semibold">{clubName}</span>
          </p>
          <p className="text-sm opacity-80">
            {t("category")}: {category}
          </p>

          {/* Estrellas */}
          <div className="flex mt-1 text-yellow-400 text-lg">
            {"★★★★★".split("").map((star, idx) => (
              <span key={idx}>{star}</span>
            ))}
          </div>

          {/* Barras de habilidades */}
          <div className="mt-3 space-y-1 text-xs">
            <div>
              <p className="font-semibold">YOUR TITLE</p>
              <div className="w-full h-2 bg-white/20 rounded overflow-hidden">
                <div className="h-full w-[95%] bg-blue-400" />
              </div>
            </div>
            <div>
              <p className="font-semibold">YOUR TITLE</p>
              <div className="w-full h-2 bg-white/20 rounded overflow-hidden">
                <div className="h-full w-[85%] bg-pink-400" />
              </div>
            </div>
            <div>
              <p className="font-semibold">YOUR TITLE</p>
              <div className="w-full h-2 bg-white/20 rounded overflow-hidden">
                <div className="h-full w-[75%] bg-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
