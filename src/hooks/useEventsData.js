import { useState } from 'react';
import eventsData from '../data/events.json';

const useEventsData = () => {
    const [data] = useState(eventsData);
    const {_embedded: {events}} = data;

    return {
        events
    };
}
export default useEventsData;