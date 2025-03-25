import { useCallback, useState } from 'react';

const useEventsData = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState();
    //const apiKey = "raf3bEA4UqgxUSC7mwHoWXRIPC7OtgSe";
    const apiKey = "6a217765-bcfd-48a2-ad9f-1db981ebd40b";


    const fetchEvents = useCallback(async (params) => {
        /* eslint-disable no-debugger */
        debugger;

        console.log("Fetching events...");  // Debugging log
        setIsLoading(true);
        setError(null);
        try {
            if (params && params !== '' && params.length > 0) {
                params = `&keyword=${params}`;
            } else {
                params = '';
            }
            const response = await fetch(`https://mocki.io/v1/${apiKey}`);
            //const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&countryCode=MX${params?.length ? params : ''}`);
            const data = await response.json();

            setData(prevEvents => data._embedded?.events || prevEvents); // Prevents unnecessary re-renders

        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [apiKey]);

    console.log('events', data);

    /* eslint-enable no-debugger */

    return {
        events: data || [],
        isLoading,
        error,
        fetchEvents
    };
}
export default useEventsData;