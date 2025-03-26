import { useCallback, useState } from 'react';

const useEventsData = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState();
    const apiKey = "raf3bEA4UqgxUSC7mwHoWXRIPC7OtgSe";
    //const apiKey = "6a217765-bcfd-48a2-ad9f-1db981ebd40b";


    const fetchEvents = useCallback(async (params) => {

        console.log("Fetching events...");  // Debugging log
        setIsLoading(true);
        setError(null);
        try {
            //const response = await fetch(`https://mocki.io/v1/${apiKey}`);
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