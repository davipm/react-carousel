import React from 'react';
import ReactDOM from 'react-dom';

function Carousel({ items }) {
  const [currentOffSet, setCurrentOffSet] = React.useState(0);
  const [windowSize] = React.useState(3);
  const [paginationFactor] = React.useState(220);
  const [endOfList, setEndOfList] = React.useState(false);
  const [headOfList, setHeadOfList] = React.useState(false);

  function moveCarousel(direction) {
    if (direction === 1 && !endOfList) {
      setCurrentOffSet(currentOffSet - paginationFactor);
    }
    else if (direction === -1 && !headOfList) {
      setCurrentOffSet(currentOffSet + paginationFactor);
    }
  }

  function atEndOfList() {
    setEndOfList(currentOffSet <= (paginationFactor * -1) * (items.length - windowSize));
  }

  function atHeadOfList() {
    setHeadOfList(currentOffSet === 0);
  }

  React.useEffect(() => {
    atEndOfList();
    atHeadOfList();
  });

  return (
    <div className="card-carousel-wrapper">
      <div className={`card-carousel--nav__left ${headOfList ? 'card-carousel-disable-nav': ''}`} onClick={() => {moveCarousel(-1)}} />
      <div className="card-carousel">
        <div className="card-carousel--overflow-container">
          <div className="card-carousel-cards" style={{ transform: `translate(${currentOffSet}px)` }}>
            {items.map((item, index) => (
              <div className="card-carousel--card" key={index}>
                <img src="https://placehold.it/200x200" alt={item.name}/>
                <div className="card-carousel--card--footer">
                  <p>{item.name}</p>
                  <p>{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`card-carousel--nav__right ${endOfList ? 'card-carousel-disable-nav': ''}`} onClick={() => { moveCarousel(1)}} />
    </div>
  )
}

function App() {
  const [items] = React.useState([
    {name: 'Tycoon Thai', tag: "Thai"},
    {name: 'Ippudo', tag: "Japanese"},
    {name: 'Milano', tag: "Pizza"},
    {name: 'Tsing Tao', tag: "Chinese"},
    {name: 'Frances', tag: "French"},
    {name: 'Burma Superstar', tag: "Burmese"},
    {name: 'Salt and Straw', tag: "Ice cream"},
  ]);

  return (
    <main id="app">
      <h1>React.js Card Carousel</h1>
      <Carousel items={items} />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));