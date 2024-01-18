import { useState } from "react";
import Input from "./Input";
import Filter from "./FilterByRegion";
import CountryCard from "./CountryCard";
import data from "../../data.json";

interface Country {
  name: string;
  flags: { png: string };
  population: number;
  region: string;
  capital?: string;
}

function AllCountries() {

    const [filter, setFilter] = useState("");
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

        const filteredData = data.filter((country) => {
          const matchesFilter = country.name
            .toLowerCase()
            .includes(filter.toLowerCase());
          const matchesRegion = selectedRegion
            ? country.region === selectedRegion
            : true;
          return matchesFilter && matchesRegion;
        });

        const inputHandleChange = (
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          setFilter(event.target.value);
        };

        const selectHandleSelect = (
          event: React.ChangeEvent<HTMLSelectElement>
        ) => {
          setSelectedRegion(
            event.target.value === "Filter by Region"
              ? null
              : event.target.value
          );
        };

  return (
    <div>
      <div className="py-10 flex justify-between items-center flex-row flex-wrap">
        <Input value={filter} handleChange={inputHandleChange} />
        <Filter handleSelect={selectHandleSelect} />
      </div>
      <div className="flex gap-10 justify-center md:justify-between flex-row flex-wrap">
        {filteredData.map((country: Country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
}

export default AllCountries;
