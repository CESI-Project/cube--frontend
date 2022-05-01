import { useMutation } from 'react-query';
import { postConnection } from '../../services/user.service';

export const useConnection = () => useMutation('connection', postConnection);
