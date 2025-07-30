import { Select } from "@headlessui/react";
import { MainSelectDataOptionProps } from "@src/interfaces";

interface MainSelectProps {
  name: string;
  label: string;
  optionDisabled: string;
  options: MainSelectDataOptionProps[];
  value: string;
  onHandleChangeValue: (value: string) => void;
}

export const MainSelect: React.FC<MainSelectProps> = ({
  name,
  label,
  optionDisabled,
  options,
  value,
  onHandleChangeValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onHandleChangeValue(e.target.value);
  };

  return (
    <>
      <Select
        name={name}
        className="main-select w-full border bg-transparent border-gray-200 px-4 py-2 text-white rounded-lg outline-none"
        aria-label={label}
        data-focus
        data-hover
        value={value}
        onChange={handleChange}
      >
        <option selected disabled value="" className="text-gray-500">
          {optionDisabled}
        </option>

        {options &&
          options.length > 0 &&
          options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black capitalize"
            >
              {option.label}
            </option>
          ))}
      </Select>
    </>
  );
};
