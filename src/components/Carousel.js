import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Carousel({ items }) {
  const [currentOffSet, setCurrentOffSet] = useState(0);
  const [windowSize] = useState(3);
  const [paginationFactor] = useState(220);
  const [endOfList, setEndOfList] = useState(false);
  const [headOfList, setHeadOfList] = useState(false);

  useEffect(() => {
    atEndOfList();
    atHeadOfList();
  }, [currentOffSet]);

  function moveCarousel(direction) {
    if (direction === 1 && !endOfList) {
      setCurrentOffSet(currentOffSet - paginationFactor);
    } else if (direction === -1 && !headOfList) {
      setCurrentOffSet(currentOffSet + paginationFactor);
    }
  }

  function atEndOfList() {
    setEndOfList(
      currentOffSet <= paginationFactor * -1 * (items.length - windowSize)
    );
  }

  function atHeadOfList() {
    setHeadOfList(currentOffSet === 0);
  }

  return (
    <div className="card-carousel-wrapper">
      <div
        className={`card-carousel--nav__left ${
          headOfList ? "card-carousel-disable-nav" : ""
        }`}
        onClick={() => {
          moveCarousel(-1);
        }}
      />
      <div className="card-carousel">
        <div className="card-carousel--overflow-container">
          <div
            className="card-carousel-cards"
            style={{ transform: `translate(${currentOffSet}px)` }}
          >
            {items.map((item, index) => (
              <div className="card-carousel--card" key={index}>
                <img src="https://placehold.it/200x200" alt={item.name} />
                <div className="card-carousel--card--footer">
                  <p>{item.name}</p>
                  <p>{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`card-carousel--nav__right ${
          endOfList ? "card-carousel-disable-nav" : ""
        }`}
        onClick={() => {
          moveCarousel(1);
        }}
      />
    </div>
  );
}

Carousel.prototype = {
  items: PropTypes.array.isRequired
};
