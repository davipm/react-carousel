import React, {useState} from 'react';
import Carousel from './components/Carousel';

function App() {
  const [items] = useState([
    {name: 'Brazil', tag: "Brasilia"},
    {name: 'Japan', tag: "Tokyo"},
    {name: 'Italy', tag: "Roma"},
    {name: 'China', tag: "Beijing"},
    {name: 'French', tag: "Paris"},
    {name: 'Russia', tag: "Moscow"},
    {name: 'England', tag: "London"},
  ]);

  return (
    <main id="app">
      <h1>React.js Card Carousel</h1>
      <Carousel items={items} />
    </main>
  );
}

export default App;
