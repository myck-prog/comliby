import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';
import Book from '../components/ui/Book';
const BookInfo = ({ books }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);
    // you can use parsefloat but we can put + both sides and string will be turned into number


    console.log(book)

    return (
        <div id="books__body">
            <main className="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title-top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--ig" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    {book.title}
                                </h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">

                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus temporibus nam vel eius numquam quidem modi et molestias aperiam eveniet, fugiat ipsa similique doloremque, quos laborum animi, excepturi quas.

                                    </p>
                                    <p className="book__summary--para">

                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus temporibus nam vel eius numquam quidem modi et molestias aperiam eveniet, fugiat ipsa similique doloremque, quos laborum animi, excepturi quas.

                                    </p>
                                </div>
                                <button className="btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title-top">
                                Reccomended Books
                            </h2>
                        </div>
                        <div className="books">

                            {
                                books
                                .filter((book) => book.rating === 5 && +book.id !== +id)
                                .slice(0,4)
                                .map(book => <Book book={book} key={book.id} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;
