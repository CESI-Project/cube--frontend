import { useMutation } from 'react-query';
import { putActivatedUser } from '../../services/user.service';

export const useActivatedAccount = () => useMutation('activated-user', putActivatedUser);
