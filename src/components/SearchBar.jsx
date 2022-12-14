function SearchBar({ handleChange, search, darkMode }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search for a country..."
        className={`px-8 py-4 rounded-md bg-blue-d font-primary text-white placeholder:text-white text-sm basis-full focus:outline-none w-full mb-10 mt-7 shadow-md max-w-lg self-start lg:m-0  ${
          !darkMode && "text-blue-vvd bg-white placeholder:text-blue-vvd"
        }`}
        onChange={(event) => handleChange(event)}
        value={search}
      />
    </>
  );
}

export default SearchBar;
