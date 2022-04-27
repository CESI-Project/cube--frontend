import { useQuery } from 'react-query';
import { getTopicById } from '../../services/topic.service';

export const useTopicById = (id: number) => {
  const { data, refetch } = useQuery(
    'topic-by-id',
    () => getTopicById(id),
  );

  return { topic: data || [], refetch };
};
