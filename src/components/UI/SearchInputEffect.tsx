import { GoSearch } from "react-icons/go";

import { useState } from "react";

interface SearchInputEffectProps {
  search: string;
  handleSearch: (search: string) => void;
}

export const SearchInputEffect: React.FC<SearchInputEffectProps> = ({
  search,
  handleSearch,
}) => {
  const [active, setActive] = useState(true);

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
            placeholder="Buscar cursos..."
            type="text"
            value={search}
            onChange={({ target }) => handleSearch(target.value)}
          />
        </div>
      </div>
    </>
  );
};
