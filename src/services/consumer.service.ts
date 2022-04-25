import axios from 'axios';
import { BACKEND_URI } from './index';
import { Consumer } from '../models/Consumer';

interface postConncetionProps {
    email: string
    password: string
}

export const postConnection = async ({ email, password }: postConncetionProps) => axios.put(`${BACKEND_URI}/connection/${email}/${password}`).then((response) => response.data);
