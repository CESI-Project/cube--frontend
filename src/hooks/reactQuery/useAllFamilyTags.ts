import { useQuery } from 'react-query';
import { getAllFamilyTags } from '../../services/familyTag.service';

export const useAllFamilyTags = () => {
  const { data } = useQuery(
    'all-family-tags',
    getAllFamilyTags,
    {
      staleTime: Infinity,
    },
  );

  return { familyTags: data || [] };
};
