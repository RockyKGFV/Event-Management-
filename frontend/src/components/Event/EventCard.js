import React from 'react';

const EventCard = ({ event }) => {
    const { title, description, date, time, location, category, capacity, registrationDeadline } = event;

    return (
        <div className="event-card">
            <h3>{title}</h3>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Capacity:</strong> {capacity}</p>
            <p><strong>Registration Deadline:</strong> {new Date(registrationDeadline).toLocaleDateString()}</p>
            
        </div>
    );
};

export default EventCard;
