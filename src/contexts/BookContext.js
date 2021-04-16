import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] =useState([
        {title: 'name of the wind', author:'patrick rothfuss', id:1},
        {title:'the final empire', author:'brandon sandeerson', id:2}
    ]);

    const removeBook = (id) => {
      setBooks( books.filter(book => book.id != id ) );
    }

    const addBook = (book) => {
        setBooks(prevBooks => [...prevBooks, 
            {title: book.title, author: book.author, id: prevBooks.length + 1}])
    }
     

    return ( 
        <BookContext.Provider value={{books, removeBook, addBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;