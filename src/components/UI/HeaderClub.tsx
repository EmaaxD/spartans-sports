import { useMemo } from "react";

import { HeaderClubsScreenProps } from "@src/interfaces";

import { MainSelect, SearchInputEffect } from "@src/components/UI";
import { clubCategories } from "@src/utils/const";

export const HeaderClub: React.FC<HeaderClubsScreenProps> = ({
  title,
  onlySelectCat = false,
  noSearch = false,
  selectCategory,
  search,
}) => {
  const categoryMemo = useMemo(() => {
    return clubCategories.map((category) => ({
      label: category.name,
      value: category.id,
    }));
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-center gap-10 sm:gap-14 lg:gap-0">
        <div className="w-full flex flex-row justify-between items-center">
          <h1
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold capitalize"
            data-aos="zoom-in"
          >
            {title}
          </h1>

          {noSearch === false && (
            <div
              className="flex lg:hidden"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <SearchInputEffect
                search={search || ""}
                handleSearch={() => {}}
              />
            </div>
          )}
        </div>

        <div className="w-full flex flex-col md:flex-row justify-end items-start md:items-center gap-5">
          {noSearch === false && (
            <div
              className="hidden lg:flex"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <SearchInputEffect
                search={search || ""}
                handleSearch={() => {}}
              />
            </div>
          )}

          <div className="w-full lg:w-fit flex flex-col sm:flex-row gap-5">
            <div
              className="flex flex-1"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <MainSelect
                name="category"
                label="Categoria"
                optionDisabled="Selecciona una categoria"
                options={categoryMemo}
                value={selectCategory}
                onHandleChangeValue={(value) => {}}
              />
            </div>

            {/* {selectCategory !== "" && (
              <div
                className="flex flex-1"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                <MainSelect
                  name="subCategory"
                  label="SubCategoria"
                  optionDisabled="Selecciona una subcategoria"
                  options={subCategoryMemo || []}
                  value={selectSubCategory}
                  onHandleChangeValue={(value) => {
                    handleChangeSelectSubCategory(value);
                  }}
                />
              </div>
            )} */}

            {/* <div
              className="flex flex-1"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <MainSelect
                label="Autores"
                optionDisabled="Autores"
                name="author"
                options={authores}
                value={selectAuthor}
                onHandleChangeValue={(value) => handleChangeSelectAuthor(value)}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
