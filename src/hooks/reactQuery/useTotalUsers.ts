import { useQuery } from 'react-query';
import { getTotalUsers } from '../../services/user.service';

export const useTotalUsers = () => {
  const { data } = useQuery(
    'total-users',
    () => getTotalUsers(),
  );

  return { totalUsers: data || [] };
};
