import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants";
import EventItem from "../../../../components/Events/components/EventItem";

const LikedEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch liked events from local storage or API
    const fetchLikedEvents = async () => {
      try {
        setIsLoading(true);

        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];

        const results = [];

        for (const eventId of likedEvents) {
          const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);
          const data = await response.json();

          results.push(data);
        }

        setEvents(results);
      } catch (error) {
        console.error("Error fetching liked events from localStorage", error);
        setError(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }

    };

    fetchLikedEvents();
  }, []);

  const navigate = useNavigate();

  const handleEventItemClick = (id) => {
      navigate(`/detail/${id}`);
  };

  if (error && Object.keys(error).length > 0) {
    return <div>Hubo un error al cargar los eventos</div>;
  }

  if (isLoading) {
    return <div>Cargando eventos...</div>;
  }

  return (
    <div className="liked-events">
      <h2>Liked Events</h2>
      { 
        events.map((event, index) => 
          <EventItem 
            key={`liked-event-item-${event.id}-${index}`} 
            name={event.name} 
            image={event.images[0]?.url}
            info={event.info || "No description available"} 
            onEventClick={handleEventItemClick}
            id={event.id}/>)
      }
    </div>
  );
}

export default LikedEvents;