import React from 'react';



const BookDetails = (props) => {
    const removeBook = () => {
        props.removeBook(props.book.id);
    }

    return (<li onClick={removeBook}>{props.book.author} {props.book.title}</li>);
}
 
export default BookDetails;