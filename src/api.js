import axios from 'axios';

// Create one API instance
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api'
});

// API functions
export const getBuses = () => API.get('/buses');
export const getSeats = (busId) => API.get(`/buses/${busId}/seats`);
export const bookSeat = (payload) => API.post('/bookings', payload);

export default API;