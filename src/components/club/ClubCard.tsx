import Image from "next/image";
import Link from "next/link";
import { BsCalendarDate } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

import { ClubCardProps } from "@src/interfaces";

import { LazyProdVideo } from "../UI";

import ClubImage from "@src/assets/img/Encabezado-GoClub-Mobile.png";

export const ClubCard: React.FC<ClubCardProps> = ({
  _id,
  name,
  logo,
  description,
  location,
  established,
  presentationVideo,
  category,
}) => {
  return (
    <Link href={`/clubs/${_id}`} className="no-underline">
      <div className="flex flex-col">
        <div className="bg-white/20 shadow-lg rounded-lg">
          <div className="relative w-full h-48">
            <Image
              src={logo || ClubImage}
              alt="Club Image"
              width={2000}
              height={2000}
              className="w-full h-full object-cover rounded-t-lg"
            />

            <LazyProdVideo
              src={presentationVideo}
              poster={logo.toString() || ClubImage.src}
            />
          </div>

          <div className="flex flex-col gap-5 p-3">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-white">{name}</h2>
              <p className="text-sm text-gray-300">{description}</p>
            </div>

            <div className="flex justify-between items-center flex-wrap gap-3">
              <div className="flex flex-col items-center text-xs text-gray-200">
                <BsCalendarDate className="inline" size={20} />
                <span>Fundado</span>
                <span className="font-semibold">{established}</span>
              </div>
              <div className="flex flex-col items-center text-xs text-gray-200">
                <FaUsers className="inline" size={20} />
                <span>Miembros</span>
                <span className="font-semibold">150</span>
              </div>
              <div className="flex flex-col items-center text-xs text-gray-200">
                <MdCategory className="inline" size={20} />
                <span>Categoría</span>
                <span className="font-semibold">{category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
