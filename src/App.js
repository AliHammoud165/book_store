import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from './components/pages/mainPage/main_page';
import { Book_page } from './components/pages/bookpage/Book_page';
import { StarRating } from './components/Stars/stars';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="/book/:id" element={<Book_page />} />
    //   </Routes>
    // </Router>
    <>
    <StarRating rating={2}/>
    </>
  );
}

export default App;
