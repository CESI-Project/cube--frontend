import { useQuery } from 'react-query';
import { getTopicById } from '../../services/topic.service';
import { Comment } from '../../models/Comment';
import { SubComment } from '../../models/SubComment';
import { Topic } from '../../models/Topic';

export const useTopicById = (id: number) => {
  const { data, refetch } = useQuery(
    'topic-by-id',
    () => getTopicById(id),
  );

  const jsonData = data || [];
  // @ts-ignore
  const { topic }: Topic = jsonData;
  const { commentsAndSubComments } = jsonData;
  const commentsAndSubCommentsData = commentsAndSubComments || [];
  const comments: Comment[] = commentsAndSubCommentsData.map((item: any) => item.comment);
  const subComments: SubComment[] = commentsAndSubCommentsData.map((item: any) => item.responseComments).flat();

  return {
    topic: topic || [],
    comments: comments || [],
    subComments: subComments || [],
    refetch,
  };
};
