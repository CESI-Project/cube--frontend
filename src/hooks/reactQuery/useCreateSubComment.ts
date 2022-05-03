import { useMutation } from 'react-query';
import { postCreationSubComment } from '../../services/subcomment.service';

export const useCreateSubComment = () => useMutation('create-comment', postCreationSubComment);
