import { useQuery } from 'react-query';
import { getTopicById } from '../../services/topic.service';

export const useTopicById = (id: number) => {
  const { data, refetch } = useQuery(
    'topic-by-id',
    () => getTopicById(id),
  );

  const jsonData = data || [];
  const { topic } = jsonData;
  const { commentsAndSubComments } = jsonData;

  return { topic: topic || [], comments: commentsAndSubComments || [], refetch };
};
