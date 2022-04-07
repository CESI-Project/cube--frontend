import axios from 'axios';

export const getTopic = () => axios.get('http://localhost:8080/api/v1/topic').then((response) => response.data);
