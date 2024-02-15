import React from "react";
import "tachyons";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div id="searchBar" className="pa3">
      <input
        className="pa2"
        type="search"
        placeholder="Search Robots"
        onChange={onSearchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
