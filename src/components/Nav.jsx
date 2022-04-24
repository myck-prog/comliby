import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg'

// 04/21 17:09
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
            <a href="/">
            {/* react is webpack so doens't get the lib */}
                <img src={LibraryLogo} alt="" className="logo" />
            </a>
            <ul className="nav__links">
                <li className="nav__list">
                    <a href="/" className="nav__link">
                        Home
                    </a>
                </li>
                <li className="nav__list">
                    <a href="/" className="nav__link">
                        Books
                    </a>
                </li>

                {/* Put paranthese in onClick it will call straight awa
                put some arrow if need to put some functionfunction ()=>function(props) */}
                <button className="btn__menu" onClick={openMenu}>
                    <FontAwesomeIcon icon="bars"/>
                </button>
                <li className="nav__icon">
                    <a href="/cart" className="nav__link">
                        <FontAwesomeIcon icon="shopping-cart"/>
                    </a>
                <span className="cart__length">2</span>
                </li>
            </ul>
            <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                <FontAwesomeIcon icon="times"/>
            </button>
            <ul className="menu__links">
                <li className="menu__list">
                    <a href="/" className="menu__link">
                        Home
                    </a>
                </li>
                <li className="menu__list">
                    <a href="/books" className="menu__link">
                        Books
                    </a>
                </li>
                <li className="menu__list">
                    <a href="/cart" className="menu__link">
                        Cart
                    </a>
                </li>
            </ul>

            </div>
        </div>
    </nav>
  )
}

export default Nav;