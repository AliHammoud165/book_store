import React, { useState, useRef } from 'react';
import { SearchIcon } from '../assets/icons/searchicon';
import { searchCriteria } from './data_searchby';
import './Searchbar.css';

function SearchBar({ setSearchTerm, setSelectedCriterion, selectedCriterion }) {
  const [is_open, setIs_open] = useState(false);
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    const inputValue = inputRef.current.value;
    setSearchTerm(inputValue);
    console.log(inputValue);
  };

  const handleSearchByClick = () => {
    setIs_open(!is_open);
    console.log(is_open);
  };

  const handleCriterionSelect = (criterion) => {
    setSelectedCriterion(criterion);
    setIs_open(false);
  };

  return (
    <div className="Searchbar_main_box">
      <div className="Search_by_container">
        <div className="Search_by" onClick={handleSearchByClick}>
          {selectedCriterion}
        </div>
        {is_open && (
          <ul className="dropdown_menu">
            {searchCriteria.map((criterion, index) => (
              <li
                key={index}
                className="dropdown_item"
                onClick={() => handleCriterionSelect(criterion)}
              >
                {criterion}
              </li>
            ))}
          </ul>
        )}
      </div>
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
