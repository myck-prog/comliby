import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

const Book = ({ book }) => {
    const [img,setImg] = useState();

    const mountedRef = useRef(true);
    
    useEffect(() => {
        const image = new Image();
        image.src = book.url;
        image.onload = () => {
            setTimeout(()=>{
                //  if (mountedRef.current==true){
                   setImg(image);
                // }
            },300);
        }
        return ()=>{
            // when components unmounts
            mountedRef.current = false
        }
    })

    return (

        <div className="book">
              {/* fragment cause its all in one element */}
        {
            img ? (
      
            <>
            <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img src={img.src} alt="" className="book__img"  />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title-link">
                    {book.title}</Link>
            </div>
            <Rating rating={book.rating} />
            <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
          </>):(
          <><div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
            </>)
        }
            
        </div>
    );
}

export default Book;
