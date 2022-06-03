import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import "./App.css";

function App() {

  const [books, setBooks] = useState(() => {
    let prepareBooks = localStorage.getItem('books');
    let books = JSON.parse(prepareBooks);
    return books || [];
  });

  const [book, setBook] = useState({title:'', author:'', id: ''});

  const createSaveBook = (e) => {
    e.preventDefault();
    if (book.id) {
      setBooks(books.map((b) => {
        if (b.id === book.id) {
          return { ...b, title: book.title, author: book.author };
        }
        return b;
      }))
    } else {
      const newBook = {
        ...book, id: Date.now()
      }        
      setBooks([...books, newBook]);
    }
    setBook({title: '', author: '', id: ''});   
  };

  const removeBook = (bookId) => {
    setBooks(books.filter((b) => b.id !== bookId));
    setBook({title: '', author: '', id: ''}); 
  };
  
  const editBook = (book) => {
    setBook({title: book.title, author: book.author, id: book.id});
  }

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]);

  return (
    <div className="App">
      <BookForm createSaveBook={createSaveBook}  book={book} setBook={setBook}/>
      {books.length !== 0 ? (
        <BookList
          books={books}         
          removeBook={removeBook}
          editBook={editBook}
          title="Демо-страница для редактирования списка книг"
        />
      ) : (
        <h1>Книги не найдены</h1>
      )}
    </div>
  );
}

export default App;
