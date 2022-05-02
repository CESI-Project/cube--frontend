import { useQuery } from 'react-query';
import { getTopicById } from '../../services/topic.service';
import { View } from '../../models/View';

export const useTopicById = ({ topicId, userId }: View) => {
  const { data, refetch } = useQuery(
    'topic-by-id',
    () => getTopicById({ topicId, userId }),
    {
      enabled: !!userId,
    },
  );

  return { topic: data || [], refetch };
};
