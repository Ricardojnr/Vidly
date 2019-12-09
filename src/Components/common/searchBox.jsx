import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      onChange={e => onChange(e.currentTarget.value)}
      className="form-control my-3"
      placeholder="Search..."
      type="text"
      value={value}
    ></input>
  );
};

export default SearchBox;
