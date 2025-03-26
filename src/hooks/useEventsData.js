import { useCallback, useState } from 'react';

const useEventsData = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState();
    const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;

    const fetchEvents = useCallback(async (params) => {

        console.log("Fetching events...");  // Debugging log
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&countryCode=MX${params?.length ? params : ''}`);
            const data = await response.json();

            setData(prevEvents => data || prevEvents); // Prevents unnecessary re-renders
            setIsLoading(false);

        } catch (error) {
            setError(error);
        }
    }, [apiKey]);

    console.log('events', data);

    return {
        events: data?._embedded?.events || [],
        page: data?.page || {},
        isLoading,
        error,
        fetchEvents
    };
}
export default useEventsData;