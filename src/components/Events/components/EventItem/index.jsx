import { Link } from 'react-router-dom';
import useLikeEvents from '../../../../hooks/useLikeEvents';
import HearthFilled from '../../../../assets/hearth-filled.png';
import HearthUnfilled from '../../../../assets/hearth-unfilled.png';
import styles from './EventItem.module.css';

const EventItem = ({ info, name, image, id, onEventClick }) => {
    const { isEventLiked, toggleEventLike } = useLikeEvents(id);

    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();                
        onEventClick(id);
    }

    const handleHearthClick = (evt) => {
        evt.stopPropagation();
        toggleEventLike();
    }

    return (
        <div className={`${styles.eventItemContainer} ${styles.anotherContainer}`}>
            <div className={styles.imageContainer}>
                {/* <img src={HearthFilled} alt="icon-heart" className={styles.hearthFilled}/> */}
                <img src={ isEventLiked ? HearthFilled : HearthUnfilled} alt="icon-heart" className={styles.hearthUnfilled} onClick={handleHearthClick}/>
                <img src={image} alt="image-event" width={200} height={200}/>
            </div>
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