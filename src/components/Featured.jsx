import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Book from './ui/Book';
// import data from "../data" we will get error because data don't have default.
// need to  
import {books} from "../data"

const Featured = () => {
    // filter based on the  ojbect

    function getFiveStarBooks(){}
        
   
    
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                    {/* using react in html, don't forget to pass the id, or index */}
                    {books.filter(book => book.rating === 5).slice(0,4)
                    .map(book=> <Book book={book} key={book.id}/>)}
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
