import axios from 'axios';
import { BACKEND_URI } from './index';
import { Consumer } from '../models/Consumer';

interface postConncetionProps {
    email: string
    password: string
}

export const postConnection = async ({ email, password }: postConncetionProps) => axios.put(`${BACKEND_URI}/user/log-in`, { email, password }).then((response) => response.data);

export const postCreationAccount = async ({
  firstName, name, birthDate, email, password,
}: Consumer) => axios.post(`${BACKEND_URI}/user/sign-up`, {
  firstName, name, birthDate, email, password,
}).then((response) => response.data);
