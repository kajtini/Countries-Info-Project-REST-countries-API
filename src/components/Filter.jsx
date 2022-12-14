import { IoMdArrowDropdown } from "react-icons/io";

function Filter({
  darkMode,
  handleClick,
  openFilter,
  isFiltering,
  resetFilter,
  getFilteredArr,
  filteredValue,
}) {
  return (
    <>
      <div
        className={`font-primary text-white flex items-center self-start bg-blue-d 
      px-5 py-4 text-sm gap-10 rounded-md cursor-pointer relative mb-14 shadow-md lg:m-0 max-w-[200px] justify-center lg:max-w-none  ${
        !darkMode && "text-blue-vvd bg-white"
      }`}
        onClick={handleClick}
      >
        <p>{(isFiltering && filteredValue) || "Filter by Region"}</p>
        <IoMdArrowDropdown />

        {openFilter && (
          <ul
            className={`list-none text-white absolute bg-blue-d rounded-md px-6 py-4 left-0 top-[110%] right-0 shadow-md z-20 leading-7 ${
              !darkMode && "text-blue-vvd bg-white"
            }`}
          >
            {isFiltering && <li onClick={resetFilter}>None</li>}
            <li onClick={() => getFilteredArr("Europe")}>Europe</li>
            <li onClick={() => getFilteredArr("Asia")}>Asia</li>
            <li onClick={() => getFilteredArr("Africa")}>Africa</li>
            <li onClick={() => getFilteredArr("Oceania")}>Oceania</li>
            <li onClick={() => getFilteredArr("Americas")}>America</li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Filter;
