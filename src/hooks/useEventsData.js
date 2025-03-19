import { useRef, useEffect } from 'react';
import eventsData from '../data/events.json';

const useEventsData = () => {
    const data = useRef(eventsData);
    const {_embedded: {events}} = data.current;

    useEffect(() => {
        console.log('data', data.current);
    }, [events]);

    return {
        events
    };
}
export default useEventsData;