import React from "react";
import "./BookItem.css";


const BookItem = ({ key ,index ,book, onBookSelect , onHeartClick }) => {
  return (
    <div key={key} index={index} onClick={() => onBookSelect(book)} className="book-item item">
      
      <div className="content">
        <div className="header">{book.volumeInfo.title}</div>
      </div>
      
      {book.volumeInfo.authors}
      <div> <button className="ui icon button" onClick={() => onHeartClick(book)}>
        <i className="heart icon"></i>
        </button>
        </div>
    </div>
       
      
    
  );
};

export default BookItem;
