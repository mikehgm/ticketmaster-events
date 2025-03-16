import Navbar from './components/Navbar';
import Events from './components/Events';
import './App.css';
import { useState } from 'react';

function App() {
  const [searchEvent, setSearchEvent] = useState('');

  const handleNavbarSearch = (event) => {
    setSearchEvent(event);
  };

  console.log(searchEvent, 10);

  return (
    <>
      {
        <div>
          <h1>Vite + React</h1>
          <Navbar onSearch={handleNavbarSearch} />
          <Events searchEvent={searchEvent} />
        </div>
      }
    </>
  )
}

export default App
