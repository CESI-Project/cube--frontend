import { useMutation } from 'react-query';
import { postCreationTopic } from '../../services/topic.service';

export const useCreateTopic = () => useMutation('create-topic', postCreationTopic);
