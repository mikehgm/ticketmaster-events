import { useState, useEffect } from 'react';
import eventsData from '../data/events.json';

const useEventsData = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState();

    useEffect(() => {
        setTimeout(() => {
            try{
                setData(eventsData);
            }
            catch (error) {
                setError(error);
            }
            setIsLoading(false);
        }, 4000);
    }, []);

    console.log('events', data);

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error
    };
}
export default useEventsData;