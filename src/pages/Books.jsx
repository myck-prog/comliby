import React from 'react';
import Book from "../components/ui/Book";
import {books} from '../data'

const Books = ({books}) => {
    
    return (
      
        <div id="books_body">
        <main className="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">All Books</h2>
                            <select id="filter" defaultValue="DEFAULT">
                                <option value="DEFAULT"  disabled>Sort</option>
                                <option value="LOW_TO_HIGH" >Price, Low to High</option>
                                <option value="HIGH_TO_LOW"  >Price, High to Low</option>
                                <option value="RATING"  >Rating</option>
                            </select>
                        </div>
                        <div className="books">
                            {books.map((book) => (
                                <Book book={book} key={book.id}/>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
            
        </div>
    );
}

export default Books;
