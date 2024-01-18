import { Routes, Route } from "react-router-dom";
import CountryDetails from "./CountryDetails";
import AllCountries from "./AllCountries";

function Main() {

  return (
    <main className="min-h-screen pb-5 bg-l-vlGray dark:bg-d-vdBlue">
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="country/:countryName" element={<CountryDetails />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main