import { useQuery } from 'react-query';
import { getSubCommentByComment } from '../../services/subcomment.service';

export const useSubCommentsByComment = (commentId: number | undefined) => {
  const { data, refetch } = useQuery(
    `all-sub-comment-by-coment-${commentId}`,
    () => getSubCommentByComment(commentId),
    {
      enabled: !!commentId,
    },
  );

  return { subComments: data || [], refetch };
};
