const EventItem = ({ info, name, image, id, onEventClick }) => {
    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();                
        onEventClick(id);
    }

    return (
        <div>
            <img src={image} alt="image-event" width={200} height={200}/>
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handleSeeMoreClick}>Ver mas</button>
        </div>
    );
};

export default EventItem;