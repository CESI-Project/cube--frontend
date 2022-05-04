import { useMutation } from 'react-query';
import { putDeactivatedUser } from '../../services/user.service';

export const useDeactivatedAccount = () => useMutation('desactivated-user', putDeactivatedUser);
