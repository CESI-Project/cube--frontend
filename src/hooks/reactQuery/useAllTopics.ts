import { useQuery } from 'react-query';
import { getTopic } from '../../services/topic.service';

export const useAllTopics = () => {
  const { data } = useQuery(
    'all-topics',
    () => getTopic(),
  );

  console.log(data);
  return { topics: data || [] };
};
