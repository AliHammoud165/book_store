import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchBar } from '../../SearchBar/SearchBar';
import { Card } from '../../Card/Card';
import './main_page.css';

function MainPage() {
  const [selectedCriterion, setSelectedCriterion] = useState('Title');
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(searchTerm)
    if (!searchTerm) {
      fetchBooks();
    } else {
      searchBooks();
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

  const searchBooks = async () => {
    setLoading(true);
    try {
      const endpoint = selectedCriterion.toLowerCase() === 'author'
        ? `http://localhost:8081/books/by-author?authorName=${searchTerm}&page=${currentPage}&size=20`
        : `http://localhost:8081/Book/Getbytitle?title=${searchTerm}&page=${currentPage}&size=20`;
      const response = await axios.get(endpoint);
      const data = response.data;
      if (currentPage > 0) {
        setBooks(prevBooks => [...prevBooks, ...(data.content || [])]); // Ensure data.content is not undefined
      } else {
        setBooks(data.content || []); // Ensure data.content is not undefined
      }
      setTotalPages(data.totalPages || 0); // Ensure data.totalPages is not undefined
    } catch (error) {
      console.error('Error searching books:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleScroll = () => {
    console.log(currentPage)
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      if (currentPage < totalPages) setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handleSearch = async (term) => {
    setSearchTerm(term);
    setCurrentPage(0);
    setBooks([]);
    setLoading(true);
    await searchBooks(); // Ensure the initial search is performed
  };

  return (
    <div>
      <div className="Search_container">
        <SearchBar setSearchTerm={handleSearch} setSelectedCriterion={setSelectedCriterion} selectedCriterion={selectedCriterion} />
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
            id={book.id}
          />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export { MainPage };
