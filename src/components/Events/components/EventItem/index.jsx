import './styles.css';

const EventItem = ({ info, name, image, id, onEventClick }) => {
    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();                
        onEventClick(id);
    }

    return (
        <div className='event-item-container'>
            <img src={image} alt="image-event" width={200} height={200}/>
            <div className='event-info-container'>
                <h4 className='event-name'>{name}</h4>
                <p className='event-info'>{info}</p>
                <button onClick={handleSeeMoreClick} className='see-more-btn'>Ver mas</button>
            </div>
        </div>
    );
};

export default EventItem;