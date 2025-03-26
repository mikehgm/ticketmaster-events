import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';
import { format } from 'date-fns/format';
import { es } from 'date-fns/locale';

const Detail = () => {
    const { eventId } = useParams();
    const [eventData, setEventData] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${apiKey}`);
                const data = await response.json();

                setEventData(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setEventData({});
                setError(error);
                setIsLoading(false);
            }
        };

        fetchEventData();
    }, []);

    if (isLoading && !eventData) {
        return <div>Cargando evento...</div>;
    }

    if (error && error !== null) {
        return <div>Hubo un error al cargar el evento</div>;
    }

    console.log('eventData', eventData);
    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <img src={eventData.images?.[0].url} alt={eventData.name} className={styles.eventImage}/>
                <h4 className={styles.eventName}>{eventData.name}</h4>
                <p className={styles.eventInfo}>{eventData.info}</p>
                <p className={styles.eventDate}>{eventData?.dates?.start?.dateTime ? format(new Date(eventData?.dates?.start?.dateTime), 'd LLLL yyyy H:mm', { locale: es }) + ' hrs' : ""}</p>
            </div>
            <div className={styles.eventSeatInfoContainer}>
                <h4 className={styles.eventSeatmapTitle}>Mapa del Evento</h4>
                <img src={eventData.seatmap?.staticUrl} alt="seatmap" />
                <p className={styles.eventPleaseNote}>{eventData.pleaseNote}</p>
                <p className={styles.eventPriceRanges}>Rango de precios ${eventData.priceRanges?.[0].min} - ${eventData.priceRanges?.[0].max} ${eventData.priceRanges?.[0].currency}</p>
            </div>
            <a href={eventData.url}>Ir por tus boletos</a>
        </div>
    )
}

export default Detail;