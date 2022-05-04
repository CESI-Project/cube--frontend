import { useQuery } from 'react-query';
import { getAllUsers } from '../../services/user.service';

export const useAllUsers = (id: number | undefined) => {
  const { data, refetch } = useQuery(
    'all-users',
    () => getAllUsers(id),
    {
      enabled: !!id,
    },
  );

  return { allUsers: data || [], refetch };
};
