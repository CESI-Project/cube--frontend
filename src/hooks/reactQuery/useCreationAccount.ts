import { useMutation } from 'react-query';
import { postCreationAccount } from '../../services/consumer.service';

export const useCreationAccount = () => {
  const { mutate, isError } = useMutation('connection', postCreationAccount);

  return { mutate, isError };
};
