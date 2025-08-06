import { useState } from "react";
import { GoSearch } from "react-icons/go";

import { useI18n } from "@src/hooks";

interface SearchInputEffectProps {
  search: string;
  handleSearch: (search: string) => void;
}

export const SearchInputEffect: React.FC<SearchInputEffectProps> = ({
  search,
  handleSearch,
}) => {
  const [active, setActive] = useState(true);

  const { t } = useI18n();

  return (
    <>
      <div className="container">
        <input
          className="checkbox"
          type="checkbox"
          checked={active}
          onChange={() => setActive((prevState) => !prevState)}
        />
        <div className="mainbox bg-[#37373794] hover:bg-[#29292994]">
          <div className="iconContainer">
            <GoSearch className="text-white" size={18} />
          </div>
          <input
            className="search_input"
            placeholder={t("searchTxt")}
            type="text"
            value={search}
            onChange={({ target }) => handleSearch(target.value)}
          />
        </div>
      </div>
    </>
  );
};
