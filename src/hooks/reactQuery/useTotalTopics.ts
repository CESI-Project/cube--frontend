import { useQuery } from 'react-query';
import { getTotalTopics } from '../../services/topic.service';

export const useTotalTopics = () => {
  const { data } = useQuery(
    'total-topic',
    () => getTotalTopics(),
  );

  return { totalTopic: data || [] };
};
