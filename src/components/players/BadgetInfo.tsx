import { BadgetInfoProps } from "@src/interfaces";

export const BadgetInfo: React.FC<BadgetInfoProps> = ({
  colorCard,
  label,
  value,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <span
          className="text-white uppercase text-[10px] rounded-full p-1 text-center grid place-items-center leading-none
"
          style={{
            backgroundColor: colorCard,
          }}
        >
          {label}
        </span>
        <span className="text-white font-bold text-center capitalize">
          {value}
        </span>
      </div>
    </>
  );
};
