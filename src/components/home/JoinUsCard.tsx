import { JoinUsCardProps } from "@src/interfaces";

export const JoinUsCard: React.FC<JoinUsCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <>
      <div
        className="w-full h-[500px] md:h-fit lg:h-[27rem] flex flex-col justify-between shadow-md rounded-xl px-5 py-5"
        style={{
          background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
        }}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-base md:text-xl font-bold">{title}</h3>
          <p className="text-gray-400 font-normal text-sm md:text-base">
            {description}
          </p>
        </div>
        <div className="flex justify-end items-end">{icon}</div>
      </div>
    </>
  );
};
