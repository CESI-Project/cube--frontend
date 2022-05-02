import axios from 'axios';
import { BACKEND_URI } from './index';

interface uploadFile {
    id: number;
    file: any;
}

export const postUserFile = async ({ id, file }: uploadFile) => axios.post(`${BACKEND_URI}/${id}`, file).then((response) => response.data);
