import { BsArrowLeft } from "react-icons/bs";
import { nanoid } from "nanoid";

function DetailedInfo({
  country,
  handleBackClick,
  allCountries,
  handleCountryClick,
  darkMode,
  formatPopulationString,
}) {
  const borderElements = country.borders?.map((border) => {
    return (
      <p
        key={nanoid()}
        className={`bg-blue-d px-5 py-1 cursor-pointer text-center ${
          !darkMode && "bg-white shadow-md"
        }`}
        onClick={() => handleCountryClick(border)}
      >
        {
          allCountries.filter((country) => border === country.cca3)[0].name
            .common
        }
      </p>
    );
  });

  const languageElements = Object.keys(country.languages).map((lang, index) => {
    return (
      <span key={nanoid()}>
        {country.languages[lang]}
        {index !== Object.keys(country.languages).length - 1 && ", "}
      </span>
    );
  });

  return (
    <div
      className={`flex flex-col 
     text-white font-primary p-10 max-w-xl ${!darkMode && "text-blue-vvd"}`}
    >
      <button
        className={`bg-blue-d flex items-center justify-center gap-2 max-w-[100px]
       py-1 font-primary cursor-pointer mb-7 ${
         !darkMode && "bg-white shadow-md"
       }`}
        onClick={handleBackClick}
      >
        <BsArrowLeft size={20} />
        Back
      </button>

      <img src={country.flags.png} className="mb-9" />

      <h2 className="font-bold text-2xl max-w-[12rem] mb-5">
        {country.name.common}
      </h2>

      <ul className="mb-8">
        <li className="detail-item">
          <p className="font-semibold">Native name:</p>
          <p>
            {
              country.name.nativeName[Object.keys(country.languages)[0]]
                .official
            }
          </p>
        </li>
        <li className="detail-item">
          <p className="font-semibold">Population:</p>
          <p>{formatPopulationString(country.population)}</p>
        </li>
        <li className="detail-item">
          <p className="font-semibold">Region:</p>
          <p>{country.region}</p>
        </li>

        <li className="detail-item">
          <span className="font-semibold">Capital:</span>
          <p>{country.capital}</p>
        </li>
      </ul>
      <ul className="mb-8">
        <li className="detail-item">
          <p className="font-semibold">Top level domain:</p>
          <p>{country.tld}</p>
        </li>
        <li className="detail-item">
          <p className="font-semibold">Currencies:</p>
          <p>{country.currencies[Object.keys(country.currencies)[0]].name}</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-semibold">Languages:</p>
          <p>{languageElements}</p>
        </li>
      </ul>
      <div>
        <p className="font-semibold text-xl block mb-2">Border countries</p>
        <div className={`${borderElements && "flex flex-wrap gap-3"}`}>
          {borderElements ? borderElements : "No borders..."}
        </div>
      </div>
    </div>
  );
}

export default DetailedInfo;
