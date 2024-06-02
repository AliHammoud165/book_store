import React, { useRef } from 'react';
import './Searchbar.css';
import { SearchIcon } from '../assets/icons/searchicon'; // Assuming SearchIcon is the correct component name and file path

function SearchBar() {
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    const inputValue = inputRef.current.value;
    console.log('Input Value:', inputValue);
  };

  return (
    <>
      <div className="Searchbar_main_box">
        <div className="Search_input_main">
          <div className="icon_search">
            <SearchIcon />
          </div>
          <input type="text" className='Search_input' ref={inputRef} />
        </div>
        <div className='button_search' onClick={handleSearchClick}>Search</div>
      </div>
    </>
  );
}

export { SearchBar };
