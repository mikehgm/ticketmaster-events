import EventItem from './components/EventItem';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

const Events = ({searchEvent, events}) => {
    const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        navigate(`/detail/${id}`);
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

    return (
        <div>
            <h2>Eventos</h2>
            {renderEvents()}
        </div>
    );
}

export default memo(Events);