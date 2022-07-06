import { useMutation } from 'react-query';
import { postCreationSpecialAccount } from '../../services/user.service';

export const useCreationSpecialAccount = () => useMutation('create-special-account', postCreationSpecialAccount);
