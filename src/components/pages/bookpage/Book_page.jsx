import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './book_page.css';
import { StarRating } from '../../Stars/stars';

function Book_page() {
  const { id } = useParams(); // Get the id from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/book/by_id?Id=${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="main_book_page_continer">
      <div className="book_page_image">
        <div className="main_image">
          <img src={book.book_cover} alt="" />
        </div>
      </div>
      <div className="book_page_content">
        <div className="book_Page_title">{book.title}</div>
        <div className="book_page_author">By : {book.author.name}</div>
        <div className="page_nb">{book.nb_page} pages</div>
        <div className="book_page_info">{book.info}</div>
        <div className="rating"><StarRating rating={book.rating}/></div>
      </div>
    </div>
  );
}

export { Book_page };
