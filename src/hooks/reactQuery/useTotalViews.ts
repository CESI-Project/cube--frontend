import { useQuery } from 'react-query';
import { getTotalViews } from '../../services/view.service';

export const useTotalViews = () => {
  const { data } = useQuery(
    'total-view',
    () => getTotalViews(),
  );

  return { totalViews: data || [] };
};
