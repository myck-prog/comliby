import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    
      <section id="highlights">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Why choose <span className="purple">Comliby</span>
            </h2>
            <div className="highlight__wrapper">
              <Highlight
                icon={<FontAwesomeIcon icon="bolt" />}
                title="Easy and Quick"
                para="Get accesss to the book you purchased online instantly"
              />
              <Highlight
                icon={<FontAwesomeIcon icon="book-open" />}
                title="10,000+ Books"
                para="Massive collections that suits your needs!"
              />
              <Highlight
                icon={<FontAwesomeIcon icon="tags" />}
                title="Affordable"
                para="Get your favorite books under $10"
              />
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Highlights;
