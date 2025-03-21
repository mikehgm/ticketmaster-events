import Navbar from './components/Navbar';
import Events from './components/Events';
import SignupForm from './components/SignupForm';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [searchEvent, setSearchEvent] = useState('');
  const containerRef = useRef();

  /* useEffect(() => {
    console.log('searchEvent', searchEvent);
  }, [searchEvent]); */

  const handleNavbarSearch = (event) => {
    console.log('containerRef', containerRef.current);
    setSearchEvent(event);
  };

  return (
    <>
      {
        <div>
          <h1>Vite + React</h1>
          <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
          <Events searchEvent={searchEvent} />
          {/* <SignupForm /> */}
        </div>
      }
    </>
  )
}

export default App
