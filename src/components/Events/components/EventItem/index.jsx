import { Link } from 'react-router-dom';
import styles from './EventItem.module.css';

const EventItem = ({ info, name, image, id, onEventClick }) => {
    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();                
        onEventClick(id);
    }

    return (
        <div className={`${styles.eventItemContainer} ${styles.anotherContainer}`}>
            <img src={image} alt="image-event" width={200} height={200}/>
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
                    {/*
                        <Link to={`/detail/${id}`}>
                        Ver mas
                        </Link>
                    */}
                    Ver mas
                </button>
            </div>
        </div>
    );
};

export default EventItem;