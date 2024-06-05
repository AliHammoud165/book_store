import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ id, title, name, page, info, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`id:${id},Name: ${name}`);
    navigate(`/book/${id}`); 
    
  };

  return (
    <>
      <div className="Card_main" onClick={handleClick}>
        <div className="image_card">
          <img className='image' src={image} alt="" />
        </div>
        <div className="text_card">
          <div className="Card_title">{title}</div>
          <div className="name_page_Card">
            <div className="Card_author">{name}</div>
            <div className='Page_number'>{page}</div>
          </div>
          <div className="Card_info">{info}</div>
        </div>
      </div>
    </>
  );
}

export { Card };
