import { create } from 'zustand';

//store para guardar valores de manera global
const useEventsResults = create((set) => ({
    data: [],
    error: null,
    isLoading: false,
    fetchEvents: async (params) => {
        try {
            const apikey = import.meta.env.VITE_TICKETMASTER_API_KEY;
            if (!apikey) {
                throw new Error('No API key found');
            }
            await set(() => ({isLoading: true, error: {}}));
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apikey}&countryCode=MX${params?.length ? params : ''}`);
            const data = await response.json();

            await set(() => ({data, isLoading: false}));
        } catch (error) {
            await set(() => ({error, isLoading: false}));
        }
    },
}));

export default useEventsResults;