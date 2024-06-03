import React from 'react';
import { SearchIcon } from '../assets/icons/searchicon';
import './Searchbar.css';

function SearchBar({ setSearchTerm }) {
  const inputRef = React.useRef(null);

  const handleSearchClick = () => {
    const inputValue = inputRef.current.value;
    setSearchTerm(inputValue);
    console.log(inputValue)
  };

  return (
    <div className="Searchbar_main_box">
      <div className="Search_input_main">
        <div className="icon_search">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="Search_input"
          ref={inputRef}
        />
      </div>
      <div className="button_search" onClick={handleSearchClick}>
        Search
      </div>
    </div>
  );
}

export { SearchBar };
