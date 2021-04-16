import React from 'react';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';


import ThemeContextProvider from './contexts/ThemeContext';
import BookListB from './components/BookListB';
import NavBarC from './components/NavbarC';
import ThemeToggleB from './components/ThemeToggleB';
import AddNewBook from './components/AddNewBook';

function App() {
      return (  
        <div className="App">
          <ThemeContextProvider>
            <AuthContextProvider>
              <BookContextProvider>
                <NavBarC />
                <AddNewBook />
                <BookListB />
                <ThemeToggleB />
              </BookContextProvider>
            </AuthContextProvider>
          </ThemeContextProvider>
   
        </div>
      );  
}


export default App;
