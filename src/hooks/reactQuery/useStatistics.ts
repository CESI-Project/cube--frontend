import { useQuery } from 'react-query';
import { getStatistics } from '../../services/user.service';

export const useStatistics = (id: number | undefined) => {
  const { data } = useQuery(
    'statistics',
    () => getStatistics(id),
    {
      enabled: !!id,
      staleTime: Infinity,
    },
  );

  return { statistics: data || [] };
};
