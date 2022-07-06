import { useMutation } from 'react-query';
import { putModifyProfile } from '../../services/user.service';

export const useModifyProfile = () => useMutation('edit-topic', putModifyProfile);
