import axios from 'axios';
import { BACKEND_URI } from './index';

export const postConnection = async (email: string, password: string) => axios.put(`${BACKEND_URI}/connection/${email}/${password}`).then((response) => response.data);
