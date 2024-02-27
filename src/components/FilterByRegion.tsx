import { FilterByRagionProps } from "../utils/interfaces";

function Filter( {handleSelect}: FilterByRagionProps) {

  const allRegions = ["Filter by Region", "Africa", "Americas", "Asia", "Europe", "Oceania"]

  return (
    <div className="p-5 w-full md:w-[250px]">

      <div className="rounded-md shadow-xl md:w-[250px] bg-white dark:bg-d-dBlue">
        <select
          onChange={handleSelect}
          className="outline-none border-none p-3 bg-transparent relative z-40 w-[98%] text-l-dGray dark:text-white"
          defaultValue=""
          name="region"
          id="region"
        >
          {allRegions.map((region) => {
            return (
              <option key={region} value={region}>
                {region}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Filter