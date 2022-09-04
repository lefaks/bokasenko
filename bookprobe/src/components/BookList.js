import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onBookSelect , onHeartClick }) => {                     //onHeartClick nismo poslali BookItemu . . .
    const renderedList = books.map((book, index) => { return <BookItem key={book.id} index={index} onBookSelect={onBookSelect} book={book} onHeartClick={onHeartClick}/>  });
    

    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default BookList; 

 



