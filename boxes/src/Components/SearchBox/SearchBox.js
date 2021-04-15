import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input type="text" onChange={props.search} placeholder="search" />
    </div>
  );
};

export default SearchBox;
