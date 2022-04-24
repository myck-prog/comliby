import React from 'react';

const Highlight = ({icon,title,para}) => {
    return (
        <div className="highlight">
        <div className="highlight__img">
            {icon} 
            {/* pass the components by giving up on top */}
        </div>
        <h3 className="highlight__subtitle">{title}</h3>
        <p className="highlight__para">{para}</p>
    </div>
    );
}

export default Highlight;
