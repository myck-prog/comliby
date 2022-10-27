import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Canada's most awarded online library platform</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <Link to="books">
              <button className="btn">Browse book</button>
            </Link>
            <figure className="header__ig--wrapper">
              <img src={UndrawBooks} alt="" />
            </figure>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Landing;
