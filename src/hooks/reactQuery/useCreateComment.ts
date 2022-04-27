import { useMutation } from 'react-query';
import { postCreationComment } from '../../services/comment.service';

export const useCreateComment = () => useMutation('create-comment', postCreationComment);
