import axios from 'axios';
import { BACKEND_URI } from './index';

export const getAllFamilyTags = async () => axios.get(`${BACKEND_URI}/familyTag`).then((response) => response.data);
