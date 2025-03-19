import useEventsData from '../../hooks/useEventsData';
import EventItem from './components/EventItem';

const Events = ({searchEvent}) => {
    const { events, isLoading, error } = useEventsData();

    const handleEventItemClick = (id) => {
        console.log('evento clicked', id)
    };

    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchEvent.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchEvent.toLocaleLowerCase()))
        }

        return eventsFiltered.map((event) => (
            <EventItem 
                key={`event-item-${event.id}`} 
                name={event.name} 
                image={event.images[0]?.url}
                info={event.info || "No description available"} 
                onEventClick={handleEventItemClick}
                id={event.id}
            />
        ));
    };

    if (error) {
        return <div>Hubo un error al cargar los eventos</div>
    }

    if (isLoading) {
        return <div>Cargando eventos...</div>
    }

    return (
        <div>
            <h2>Eventos</h2>
            {renderEvents()}
        </div>
    );
}

export default Events;