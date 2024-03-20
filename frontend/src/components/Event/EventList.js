import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../services/eventService';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await getEvents();
                setEvents(response);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Events</h2>
            <Link to="/events/create">Create Event</Link>
            {events.map(event => (
                <div key={event._id} className="event-item">
                    <h3>{event.title}</h3>
                    <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                    <p><strong>Time:</strong> {event.time}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <Link to={'/events/${event._id}'}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default EventList;