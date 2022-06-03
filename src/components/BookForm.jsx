import React from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";

const BookForm = ({createSaveBook, book, setBook}) => {

  return (
    <form>
      <Input
        type="text"
        placeholder="Название книги"
        value={book.title}
        onChange={(e) => setBook({...book, title: e.target.value})}
      />
      <Input
        type="text"
        placeholder="Автор книги"
        value={book.author}
        onChange={(e) => setBook({...book, author: e.target.value})}
      />
      <Button onClick={createSaveBook}>Добавить/Сохранить</Button>
    </form>
  );
};

export default BookForm;
