function EventCard({event, selected, onClick}){
    return (
        <div className={`card ${selected ? "active": ""}`}
        onClick={onClick}>

            <h3>{event.name}</h3>
            <p>{event.location}</p>
            <p>{event.date}</p>
        </div>
    );
}
export default  EventCard;