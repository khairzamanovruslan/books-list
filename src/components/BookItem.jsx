import React from "react";
import Button from "./UI/Button";

const BookItem = ({number, book, removeBook, editBook}) => {
  
  return (
    <div className="book">
      <div className="book__content">       
        <div><strong>{number}. </strong> Название: {book.title}</div>
        <div>Автор: {book.author}</div>
      </div>
      <div className="book__bnts">
        <Button onClick={()=> editBook(book)}>Редактировать</Button>
        <Button onClick={() => removeBook(book.id)}>Удалить</Button>
      </div>
    </div>
  );
};

export default BookItem;
