import React, { useState } from 'react';

function SearchBar() {
  const [search, setSearch] = useState();

  return (
    <div>
      <form>
        <label>Search</label>
        <input placeholder="Search..." value="" type="text" name="" />
        <input value="" type="checkbox" name="" />
        <label>Only show products in stock</label>
      </form>
    </div>
  );
}

export default SearchBar;
