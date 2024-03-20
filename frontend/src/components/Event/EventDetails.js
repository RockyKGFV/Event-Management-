import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../services/eventService';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await getEventById(id);
                setEvent(response);
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };
        fetchEvent();
    }, [id]);

    if (!event) {
        return <div>Loading...</div>;
    }

    const { title, description, date, time, location, category, capacity, registrationDeadline } = event;

    return (
        <div>
            <h2>{title}</h2>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Capacity:</strong> {capacity}</p>
            <p><strong>Registration Deadline:</strong> {new Date(registrationDeadline).toLocaleDateString()}</p>
            {/* Add more event details as needed */}
        </div>
    );
};

export default EventDetails;