import { useQuery } from 'react-query';
import { getUserById } from '../../services/user.service';

export const useUserById = (id: number) => {
  const { data } = useQuery(
    'user-by-id',
    () => getUserById(id),
    {
      enabled: !!id,
    },
  );

  return { user: data || [] };
};
