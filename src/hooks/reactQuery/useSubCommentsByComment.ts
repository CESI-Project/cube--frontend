import { useQuery } from 'react-query';
import { getSubCommentByComment } from '../../services/subcomment.service';

export const useSubCommentsByComment = (id: number | undefined) => {
  const { data, refetch } = useQuery(
    'all-sub-comment-by-coment',
    () => getSubCommentByComment(id),
  );

  return { subComments: data || [], refetch };
};
