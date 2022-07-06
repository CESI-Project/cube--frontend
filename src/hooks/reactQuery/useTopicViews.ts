import { useQuery } from 'react-query';
import { getTopicViews } from '../../services/user.service';

export const useTopicViews = (id: number | undefined) => {
  const { data } = useQuery(
    'topic-views',
    () => getTopicViews(id),
    {
      enabled: !!id,
      staleTime: Infinity,
    },
  );

  return { topicViews: data || [] };
};
