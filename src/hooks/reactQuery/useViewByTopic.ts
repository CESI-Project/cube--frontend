import { useMutation } from 'react-query';
import { postViewByTopic } from '../../services/view.service';

export const useViewByTopic = () => useMutation('create-comment', postViewByTopic);
