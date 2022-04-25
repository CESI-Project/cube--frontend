import { useQuery } from 'react-query';
import { postConnection } from '../../services/consumer.service';

export const useConnection = (email: string, password: string) => {
  const { data, isError } = useQuery(
    'connection',
    () => postConnection(email, password),
  );
  return { consumer: data, isError };
};
