import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg'
import {Link} from "react-router-dom"

// 04/21 1:19:51
const Nav = () => {
    function openMenu(){
        // dont forget to add space 
        document.body.classList += " menu--open";
    }
    function closeMenu() {
        document.body.classList.remove("menu--open");
        
    }
  return (
      
    <nav>
        <div className="nav__container">
            <Link to="/">
            {/* react is webpack so doens't get the lib */}
                <img src={LibraryLogo} alt="" className="logo" />
            </Link>
            <ul className="nav__links">
                <li className="nav__list">
                    <Link to="/" className="nav__link">
                        Home
                    </Link>
                </li>
                <li className="nav__list">
                    <Link to="/books" className="nav__link">
                        Books
                    </Link>
                </li>

                {/* Put paranthese in onClick it will call straight awa
                put some arrow if need to put some functionfunction ()=>function(props) */}
                <button className="btn__menu" onClick={openMenu}>
                    <FontAwesomeIcon icon="bars"/>
                </button>
                <li className="nav__icon">
                    <Link to="/cart" className="nav__link">
                        <FontAwesomeIcon icon="shopping-cart"/>
                    </Link>
                <span className="cart__length">2</span>
                </li>
            </ul>
            <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                <FontAwesomeIcon icon="times"/>
            </button>
            <ul className="menu__links">
                <li className="menu__list">
                    <Link to="/" className="menu__link">
                        Home
                    </Link>
                </li>
                <li className="menu__list">
                    <Link to="/books" className="menu__link">
                        Books
                    </Link>
                </li>
                <li className="menu__list">
                    <Link to="/cart" className="menu__link">
                        Cart
                    </Link>
                </li>
            </ul>

            </div>
        </div>
    </nav>
  )
}

export default Nav;