import { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Events from '../../components/Events';
import SignupForm from '../../components/SignupForm';
import useEventsData from '../../hooks/useEventsData';


const Home = () => {
    const { events, isLoading, error, fetchEvents } = useEventsData();
    const [searchEvent, setSearchEvent] = useState('');
    const containerRef = useRef();

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleNavbarSearch = (event) => {
        setSearchEvent(event);
        fetchEvents(event);
    };

    return (
        <>
        {
            <div>
            <h1>Vite + React</h1>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            { isLoading ? <div>Cargando eventos...</div> : <Events searchEvent={searchEvent} events={events}/> }
            { !!error && <div>Hubo un error al cargar los eventos</div> }
            {/* <SignupForm /> */}
            </div>
        }
        </>
    )
}

export default Home;