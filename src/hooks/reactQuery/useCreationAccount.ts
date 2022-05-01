import { useMutation } from 'react-query';
import { postCreationAccount } from '../../services/user.service';

export const useCreationAccount = () => useMutation('connection', postCreationAccount);
