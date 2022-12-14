import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import CountryCard from "./components/CountryCard";
import DetailedInfo from "./components/DetailedInfo";

function App() {
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredArr, setFilteredArr] = useState([]);
  const [filteredValue, setFilteredValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [searchedArr, setSearchedArr] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [isDetailing, setIsDetailing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function handleFilterClick() {
    setOpenFilter((prevOpenFilter) => !prevOpenFilter);
  }

  function resetFilter() {
    setIsFiltering(false);
  }

  function handleCountryClick(id) {
    setCurrentCountry(allCountries.find((country) => country.cca3 === id));
    !isDetailing && setIsDetailing(true);
  }

  function handleBackClick() {
    setIsDetailing(false);
  }

  function handleChange(event) {
    setSearch(event.target.value);
    setSearchedArr(
      (!isFiltering ? allCountries : filteredArr).filter((country) =>
        country.name.common.toLowerCase().includes(search.trim().toLowerCase())
      )
    );
  }

  function getFilteredArr(filterV) {
    !isFiltering && setIsFiltering(true);
    setFilteredArr(
      allCountries.filter(
        (country) => country.region.toLowerCase() === filterV.toLowerCase()
      )
    );
    setFilteredValue(filterV);
  }

  function determineCountryDisplay() {
    return (
      (search && searchedArr) || (isFiltering && filteredArr) || allCountries
    );
  }

  function turnDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  function formatPopulationString(population) {
    return population.toLocaleString();
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setAllCountries([...data]));
  }, []);

  const countries = determineCountryDisplay().map((country) => {
    return (
      <CountryCard
        key={country.cca3}
        id={country.cca3}
        name={country.name.common}
        population={country.population}
        region={country.region}
        capital={country.capital || []}
        flag={country.flags.png}
        handleCountryClick={handleCountryClick}
        darkMode={darkMode}
        formatPopulationString={formatPopulationString}
      />
    );
  });

  return (
    <>
      <Navbar turnDarkMode={turnDarkMode} darkMode={darkMode} />
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-blue-vd ${
          !darkMode && "bg-gray-vl"
        } px-5`}
      >
        {!isDetailing && (
          <>
            <div>
              <div className="lg:flex lg:items-center justify-between my-6 lg:my-10 gap-6">
                <SearchBar
                  handleChange={handleChange}
                  search={search}
                  darkMode={darkMode}
                />
                <Filter
                  handleClick={handleFilterClick}
                  openFilter={openFilter}
                  getFilteredArr={getFilteredArr}
                  filteredValue={filteredValue}
                  isFiltering={isFiltering}
                  resetFilter={resetFilter}
                  darkMode={darkMode}
                />
              </div>
              <div
                className="grid grid-cols-1 justify-center items-center w-[80%] mx-auto lg:w-full  gap-16 lg:grid-cols-3 2xl:grid-cols-4 sm:w-full sm:grid-cols-2
                
              "
              >
                {countries}
              </div>
            </div>
          </>
        )}
        {currentCountry && isDetailing && (
          <DetailedInfo
            country={currentCountry}
            handleBackClick={handleBackClick}
            allCountries={allCountries}
            handleCountryClick={handleCountryClick}
            darkMode={darkMode}
            formatPopulationString={formatPopulationString}
          />
        )}
      </div>
    </>
  );
}

export default App;
