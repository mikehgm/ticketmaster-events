import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import Events from '../../components/Events';
import SignupForm from '../../components/SignupForm';
import useEventsResults from '../../state/events-results';
import ReactPaginate from 'react-paginate';
import styles from './Home.module.css';

const Home = () => {
    const { data, isLoading, error, fetchEvents } = useEventsResults();
    const events = useMemo(() => data?._embedded?.events || [], [data?._embedded?.events]);
    const page = useMemo( () => data?.page || {}, [data?.page]);
    
    const [searchEvent, setSearchEvent] = useState('');
    const containerRef = useRef();
    const fecthMyEventsRef = useRef();

    fecthMyEventsRef.current = fetchEvents;

    useEffect(() => {
        fecthMyEventsRef.current();
    }, []);

    const handleNavbarSearch = (search) => {
        setSearchEvent(search);
        fetchEvents(`&keyword=${search}`);
    };

    const handlePageClick =useCallback(({selected}) => {
        console.log(selected);
        fetchEvents(`&keyword=${searchEvent}&page=${selected}`);
    }, [searchEvent, fetchEvents]);

    const renderEvents = () => {
        if (isLoading) {
            return <div>Cargando eventos...</div>;
        }

        if (error && Object.keys(error).length > 0) {
            return <div>Hubo un error al cargar los eventos</div>;
        }

        return (
            <div>
                <Events searchEvent={searchEvent} events={events} />
                <ReactPaginate
                    className={styles.pagination}
                    nextClassName={styles.next}
                    previousClassName={styles.previous}
                    pageClassName={styles.page}
                    activeClassName={styles.activePage}
                    disabledClassName={styles.disabledPage}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page.totalPages}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    forcePage={page.number}
                />
            </div>
        );
    }

    return (
        <>
        {
            <div>
            <h1>Vite + React</h1>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {renderEvents()}
            {/* <SignupForm /> */}
            </div>
        }
        </>
    )
}

export default Home;