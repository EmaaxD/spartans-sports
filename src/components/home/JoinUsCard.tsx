import { useI18n } from "@src/hooks";
import { JoinUsCardProps } from "@src/interfaces";

export const JoinUsCard: React.FC<JoinUsCardProps> = ({
  title,
  description,
  titleBtn,
}) => {
  const { t } = useI18n();

  return (
    <>
      <div
        className="w-full h-[300px] md:h-fit lg:h-[20rem] flex flex-col justify-between shadow-md rounded-xl px-5 py-5"
        style={{
          background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-base md:text-xl font-bold">
              {t(title)}
            </h3>
            <p className="text-gray-400 font-normal text-sm md:text-base">
              {t(description)}
            </p>
          </div>

          <div className="w-full">
            <button
              className="w-full text-sm md:text-base font-semibold px-4 py-2 rounded-lg text-white transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl outline-none cursor-pointer"
              style={{
                background:
                  "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
                border: "none",
              }}
            >
              {t(titleBtn)}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
