import { useMutation } from 'react-query';
import { putValidationTopic } from '../../services/topic.service';

export const useValidationTopic = () => useMutation('validation-topic', putValidationTopic);
