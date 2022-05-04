import { useQuery } from 'react-query';
import { getViewByUser } from '../../services/view.service';

export const useViewByUser = (id: number | undefined) => {
  const { data } = useQuery(
    'view-by-user',
    () => getViewByUser(id),
    {
      enabled: !!id,
    },
  );

  return { views: data || [] };
};
