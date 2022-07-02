import { useMutation } from 'react-query';
import { putEditTopic } from '../../services/topic.service';

export const useEditTopic = () => useMutation('edit-topic', putEditTopic);
