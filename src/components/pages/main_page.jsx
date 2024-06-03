import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { SearchBar } from '../SearchBar/SearchBar';
import { Card } from '../Card/Card';
import './main_page.css';

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      fetchBooks();
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, searchTerm]); 

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8081/Book/get?page=${currentPage}&size=20`);
      const data = response.data; 
      console.log(data.content);
      if (currentPage > 0) {
        setBooks(prevBooks => [...prevBooks, ...data.content]);
      } else {
        setBooks(data.content);
      }
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };
  
  const handleSearch = async (term) => {
    setSearchTerm(term);
    setCurrentPage(0);
    setBooks([]);
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8081/Book/Getbytitle?title=${term}`);
      const data = response.data; 
      console.log(data);
      setBooks(data); // Directly use data instead of data.content
      setTotalPages(1); // Assuming the search results are not paginated
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="Search_container">
        <SearchBar setSearchTerm={handleSearch} />
      </div>
      <div className="Cards_container">
        {books.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            image={book.book_cover}
            page={book.nb_page}
            info={book.info}
            name={book.author.name}
          />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export { MainPage };
