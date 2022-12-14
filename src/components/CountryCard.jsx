import BriefInfo from "./BriefInfo";

function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
  handleCountryClick,
  id,
  darkMode,
  formatPopulationString,
}) {
  return (
    <div
      className={`text-white shadow-xl overflow-hidden rounded-lg cursor-pointer hover:scale-110 transition-all ${
        !darkMode && "text-blue-vvd"
      }`}
      onClick={() => handleCountryClick(id)}
    >
      <img
        src={flag}
        className="object-cover m-0 w-full max-h-40 hover:scale-110 transition-all cursor-pointer"
      />
      <div className={`bg-blue-d px-7 pb-10 pt-6 ${!darkMode && "bg-white"}`}>
        <p className="font-bold text-2xl mb-4 max-w-[12rem]">{name}</p>

        <ul>
          <BriefInfo
            population={formatPopulationString(population)}
            region={region}
            capital={capital}
          />
        </ul>
      </div>
    </div>
  );
}

export default CountryCard;
