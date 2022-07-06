import { useMutation } from 'react-query';
import { postTag } from '../../services/tag.service';

export const useNewTag = () => useMutation('new-tag', postTag);
