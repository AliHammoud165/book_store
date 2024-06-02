import React from 'react';
import './Card.css';

function Card({ title,name,page,info,image }) {
  return (
    <>
      <div className="Card_main">
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
