import { useQuery } from 'react-query';
import { getAllTopics } from '../../services/topic.service';

export const useAllTopics = () => {
  const { data } = useQuery(
    'all-topics',
    getAllTopics,
  );

  return { topics: data || [] };
};
