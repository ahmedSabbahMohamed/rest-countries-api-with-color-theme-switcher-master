import { useParams, Link } from "react-router-dom"
import data from "../../data.json"
import { MdKeyboardBackspace } from "react-icons/md";

function CountryDetails() {

  const {countryName} = useParams()
  const index = data.findIndex(country => country.name === countryName)
  const styleKey = "text-l-vdBlue dark:text-white py-2",
    styleValue = "inline-block pl-2 opacity-70";

  return (
    <div className="container mx-auto">
      <div className="py-10">
        <Link
          className="shadow-xl p-3 rounded-md text-l-dGray dark:text-white dark:bg-d-dBlue flex justify-start items-center gap-2 w-24 ml-5 md:ml-0"
          to={"/"}
        >
          <span className="inline-block">
            <MdKeyboardBackspace />
          </span>
          <span className="inline-block">Back</span>
        </Link>
      </div>

      <div className="flex items-center justify-center md:justify-normal flex-row flex-wrap gap-24 mt-10">
        <div className="border rounded-md p-2 bg-white dark:bg-d-dBlue dark:border-d-dBlue">
          <img
            className="w-full h-auto"
            src={data[index].flags.png}
            alt="country-flag"
          />
        </div>
        <div className="details">
          <h2 className="my-4 text-l-vdBlue p-5 md:p-0 font-semibold text-xl dark:text-white">
            {countryName}
          </h2>

          <div className="flex p-5 md:p-0 gap-10 flex-row flex-wrap mb-10">
            <div>
              <h3 className={styleKey}>
                Native Name:{" "}
                <span className={styleValue}>{data[index].nativeName}</span>
              </h3>
              <h3 className={styleKey}>
                Population:{" "}
                <span className={styleValue}>{data[index].population}</span>
              </h3>
              <h3 className={styleKey}>
                Region: <span className={styleValue}>{data[index].region}</span>
              </h3>
              <h3 className={styleKey}>
                Sub Region:{" "}
                <span className={styleValue}>{data[index].subregion}</span>
              </h3>
              <h3 className={styleKey}>
                Capital:{" "}
                <span className={styleValue}>{data[index].capital}</span>
              </h3>
            </div>
            <div>
              <h3 className={styleKey}>
                Top Level Domain:{" "}
                <span className={styleValue}>{data[index].topLevelDomain}</span>
              </h3>
              <h3 className={styleKey}>
                Currencies:{" "}
                <span className={styleValue}>
                  {data[index].currencies?.map((curr) => curr.name)}
                </span>
              </h3>
              <h3 className={styleKey}>
                Languages:{" "}
                <span className={styleValue}>
                  {data[index].languages.map((lang) => lang.name)}
                </span>
              </h3>
            </div>
          </div>

          <div className="p-5 md:p-0">
            <h3 className={`${styleKey} flex items-center flex-row flex-wrap gap-2`}>
              <span className="inline-block">Border Countries:</span>
              <span className="flex gap-3 flex-row flex-wrap">
                {data[index].borders?.map((border) => (
                  <span key={border} className="inline-block shadow-xl py-1 px-3 rounded-md text-l-dGray dark:text-white dark:bg-d-dBlue">
                    {border}
                  </span>
                ))}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails