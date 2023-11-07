import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <a href={book.amazon_url} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
    </div>
  );
};

export default Book;
