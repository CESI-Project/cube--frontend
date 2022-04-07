import axios from 'axios';
import { useQuery } from 'react-query';

const getConsumer = () => useQuery('consumer', () => axios.get('http://localhost:8080/api/v1/consumer').then((response) => response.data));

export default getConsumer;
