import { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Events from '../../components/Events';
import SignupForm from '../../components/SignupForm';
import useEventsResults from '../../state/events-results';
import ReactPaginate from 'react-paginate';
import styles from './Home.module.css';

const Home = () => {
    const { data, isLoading, error, fetchEvents } = useEventsResults();
    const events = data?._embedded?.events || [];
    const page = data?.page || {};
    
    const [searchEvent, setSearchEvent] = useState('');
    const containerRef = useRef();

    useEffect(() => {
        console.log("useEffect triggered");
        fetchEvents();
    }, []);

    const handleNavbarSearch = (search) => {
        setSearchEvent(search);
        fetchEvents(`&keyword=${search}`);
    };

    const handlePageClick = ({selected}) => {
        console.log(selected);
        fetchEvents(`&keyword=${searchEvent}&page=${selected}`);
    };

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