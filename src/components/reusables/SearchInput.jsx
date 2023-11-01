import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/svg/iconsearch.svg";

const SearchInput = ({ placeholder = "Search...", buttonText = "Search" }) => {
  return (
    <div className="relative flex items-center border p-3 bg-white rounded-full">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500">
        <SearchIcon style={{ width: "30px", height: "30px" }} />
      </div>
      <input
        type="text"
        className="py-2 pl-12 pr-16 rounded-full text-gray-700 focus:outline-none"
        placeholder={placeholder}
      />
      <button className="absolute right-3 py-2 px-4 bg-[#105B4C] text-white rounded-full">
        {buttonText}
      </button>
    </div>
  );
};

export default SearchInput;
