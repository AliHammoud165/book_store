import React from 'react'

import './main_page.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { Card } from '../Card/Card'

function Main_page() {
  return (
    <div>
        <div className="Search_container">
      <SearchBar/>
      </div>
      <div className="Cards_container">
      <Card title="the king " info="hello word" name={"ali hammoud"} image="https://images-na.ssl-images-amazon.com/images/I/71++zre30EL._AC_UL254_SR254,254_.jpg" page="200"/>
 
      </div>
    </div>
  )
}

export  {Main_page}
