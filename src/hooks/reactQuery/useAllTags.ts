import { useQuery } from 'react-query';
import { getAllTags } from '../../services/tag.service';

export const useAllTags = (id: number) => {
  const { data } = useQuery(
    'all-tags',
    () => getAllTags(id),
    {
      enabled: !!id,
      staleTime: Infinity,
    },
  );

  return { tags: data || [] };
};
