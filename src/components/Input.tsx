import { IoIosSearch } from "react-icons/io";
import { InputProps } from "../utils/interfaces";

function Input({value, handleChange}: InputProps) {
  return (
    <div className="relative p-5 md:p-0 w-full md:w-[420px]">
      <label className="absolute left-9 md:left-3 top-1/2 -translate-y-1/2 text-gray-600" htmlFor="country">
        <IoIosSearch />
      </label>
        <input
            className="pl-9 outline-none rounded-md shadow-xl border-none p-3 w-full dark:bg-d-dBlue dark:text-white"
            type="text"
            name="country"
            id="country"
            placeholder="Search for a country..."
            value={value}
            onChange={handleChange}
        />
    </div>
  );
}

export default Input