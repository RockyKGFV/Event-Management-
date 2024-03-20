import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (formData) => {
    try {
        const response = await axios.post('${API_URL}/register', formData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw error.response.data.message;
        } else {
            throw 'An error occurred during registration';
        }
    }
};

export const login = async (formData) => {
    try {
        const response = await axios.post('${API_URL}/login', formData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw error.response.data.message;
        } else {
            throw 'An error occurred during login';
        }
    }
};