import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createEvent, updateEvent } from '../services/eventService';

const EventForm = ({ initialValues, onSubmit }) => {
    const [formData, setFormData] = useState(initialValues || {});
    const [error, setError] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (initialValues) {
                await updateEvent(formData); // Update existing event
            } else {
                await createEvent(formData); // Create new event
            }
            onSubmit(); // Callback function to handle form submission completion
            history.push('/events'); // Redirect to events page
        } catch (error) {
            setError('Error creating/updating event');
        }
    };

    return (
        <div>
            <h2>{initialValues ? 'Edit Event' : 'Create Event'}</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title || ''} onChange={handleChange} required />
                </div>
                {/* Add more input fields for event details */}
                <button type="submit">{initialValues ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default EventForm;