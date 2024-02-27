import { Link } from "react-router-dom";
import { CountryCardProps } from "../utils/interfaces";

function CountryCard( {country}: CountryCardProps ) {

  const styleData = "inline-block pl-2 opacity-70 text-l-vdBlue opacity-80 dark:text-white",
    styleKey = "text-l-vdBlue font-semibold dark:text-white";

  return (
    <Link to={`/country/${country.name}`} key={country.name} className="card rounded-md shadow-xl w-[280px] h-[400px] dark:bg-d-dBlue">
      <div className={`flag rounded-t-md overflow-hidden w-full h-[200px]`}>
        <img
          className="w-full h-full"
          src={country.flags.png}
          alt="country flag"
        />
      </div>
      <div className="card-body px-6">
        <h2 className="py-3 text-l-vdBlue font-semibold text-lg dark:text-white">
          {country.name}
        </h2>
        <h3 className={styleKey}>
          Population:{"  "}
          <span className={styleData}>
            {country.population}
          </span>
        </h3>
        <h3 className={styleKey}>
          Region:{"  "}
          <span className={styleData}>
            {country.region}
          </span>
        </h3>
        <h3 className={styleKey}>
          Capital:{"  "}
          <span className={styleData}>
            {country.capital}
          </span>
        </h3>
      </div>
    </Link>
  );
}

export default CountryCard