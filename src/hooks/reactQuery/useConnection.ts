import { useMutation } from 'react-query';
import { postConnection } from '../../services/consumer.service';

export const useConnection = () => {
  const { mutate, isError } = useMutation('connection', postConnection);

  return { mutate, isError };
};
