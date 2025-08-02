import { PlayerCardFooterProps } from "@src/interfaces";
import { useI18n } from "@src/hooks";

import { BadgetInfo } from "./BadgetInfo";

export const PlayerCardFooter: React.FC<PlayerCardFooterProps> = ({
  name,
  position,
  age,
  value,
  height,
  weight,
  ims,
  colorCard,
}) => {
  const { t } = useI18n();

  return (
    <>
      <div className="relative -top-2 bg-indigo-950 w-full flex flex-col gap-3 rounded-b-md px-4 pt-5 pb-4">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col">
            <h2
              className={`text-white text-2xl font-bold ${
                name.length > 10 ? "w-10" : "w-fit"
              }`}
            >
              {name}
            </h2>
            <div className="flex text-yellow-400 text-base">
              {"★★★★★".split("").map((star, idx) => (
                <span key={idx}>{star}</span>
              ))}
            </div>
          </div>

          <h2 className="text-white text-3xl font-bold">9</h2>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center gap-2">
            <BadgetInfo
              colorCard={colorCard}
              label={t("position")}
              value={position}
            />
            <BadgetInfo colorCard={colorCard} label={t("age")} value={age} />
            <BadgetInfo
              colorCard={colorCard}
              label={t("value")}
              value={value}
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <BadgetInfo
              colorCard={colorCard}
              label={t("height")}
              value={height}
            />
            <BadgetInfo
              colorCard={colorCard}
              label={t("weight")}
              value={weight}
            />
            <BadgetInfo colorCard={colorCard} label={"ims"} value={ims} />
          </div>
        </div>

        <div className="space-y-2 text-xs">
          {[
            { title: "Aceleracion", percent: "85%", color: "bg-indigo-400" },
            { title: "Altura vuelo", percent: "75%", color: "bg-blue-400" },
          ].map(({ title, percent, color }, i) => (
            <div key={i}>
              <p className="text-gray-300 font-semibold mb-1">{title}</p>
              <div className="w-full h-2 bg-white/20 rounded">
                <div
                  className={`h-full ${color} rounded-l`}
                  style={{ width: percent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
