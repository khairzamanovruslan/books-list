import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, title, removeBook, editBook }) => {
  
  return (
    <div>
      <h1>{title}</h1>
      {books.map((book, index) => {
        return (
          <BookItem
            key={book.id}
            book={book}
            number={index + 1}
            removeBook={removeBook}
            editBook={editBook}
          />
        );
      })}
    </div>
  );
};

export default BookList;
