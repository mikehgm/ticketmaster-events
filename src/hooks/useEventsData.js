import { useState } from 'react';

const useEventsData = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState();


    const fetchEvents = async (params) => {
        try {
            if (params && params !== '' && params.length > 0) {
                params = `&keyword=${params}`;
            } else {
                params = '';
            }

            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=raf3bEA4UqgxUSC7mwHoWXRIPC7OtgSe&countryCode=MX${params?.length ? params : ''}`);
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    console.log('events', data);

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error,
        fetchEvents
    };
}
export default useEventsData;