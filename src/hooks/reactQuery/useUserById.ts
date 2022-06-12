import { useQuery } from 'react-query';
import { getUserById } from '../../services/user.service';

export const useUserById = (id: number | undefined) => {
  const { data } = useQuery(
    `user-by-id-${id}`,
    () => getUserById(id),
  );

  return { user: data || [] };
};
