import { useQuery } from 'react-query';
import { getAllComments } from '../../services/comment.service';

export const useAllComments = (id: number) => {
  const { data, refetch } = useQuery(
    'all-comments',
    () => getAllComments(id),
  );

  return { comments: data || [], refetch };
};
