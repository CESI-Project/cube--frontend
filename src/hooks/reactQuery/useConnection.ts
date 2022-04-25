import { useMutation } from 'react-query';
import { postConnection } from '../../services/consumer.service';

export const useConnection = () => {
  const { mutate } = useMutation('connection', postConnection);

  return { mutate };
};
