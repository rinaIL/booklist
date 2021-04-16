import React, { useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext';
import BookDetails from './BookDetails';


const BookListB = () => {

    const { books,removeBook } = useContext(BookContext);   
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                {books.map((book) => (
                        <BookDetails key={book.id} book={book} removeBook={removeBook} />
                    ))}
            </ul>
        </div>
     );
}
 
export default BookListB;
 
