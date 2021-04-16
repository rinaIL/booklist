import React, { useEffect, useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {BookContext} from '../contexts/BookContext';

const AddNewBook = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const { addBook } = useContext(BookContext); 
    const theme = isLightTheme ? light : dark;
    let book = {title:"", author:""}
    
    const addBookOnChange = (e) => {
         book = {...book, [e.target.name]: e.target.value};         
    }

    const handleKeyDown = (e) => {
        if (e.key == 'Enter' && book.title !== "" && book.author !== "") {
            addBook(book);
        }
    }

    return (<form className="form-inline" style={{color: theme.syntax, background: theme.bg}}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" onChange={addBookOnChange} style={{color: theme.syntax, background: theme.bg}}/> 
                <label htmlFor="author">Author:</label>
                <input type="text" onChange={addBookOnChange} onKeyDown={handleKeyDown} id="author" name="author"  style={{color: theme.syntax, background: theme.bg}}/>
            </form>  );
}
 


export default AddNewBook;