import React from 'react';

const Rating = (ratimg) => {
    return (
        <div className="book__ratings">
        {/* maps doesn't do when array is empty */}
            {
                new Array(Math.floor(book.rating)).fill(0).map((_,index)=> <FontAwesomeIcon icon="star" key={index}/>)
            }
            {/* Conditional Rendering */}
            {
                !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt"/>
            }
        </div>);
}

export default Rating;
