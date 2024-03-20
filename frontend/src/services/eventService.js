import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events';

export const createEvent = async (formData) => {
    try {
        const response = await axios.post(API_URL, formData);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const getEvents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const getEventById = async (eventId) => {
    try {
        const response = await axios.get('${API_URL}/${eventId}');
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const updateEvent = async (formData) => {
    try {
        const response = await axios.put('${API_URL}/${formData._id}', formData);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const deleteEvent = async (eventId) => {
    try {
        const response = await axios.delete('${API_URL}/${eventId}');
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};