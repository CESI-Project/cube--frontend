import { useQuery } from 'react-query';
import { getMyTopics } from '../../services/topic.service';

export const useAllFavoritesByUser = (userId: number | undefined) => {
  const { data } = useQuery(
    'all-favorites-by-user',
    () => getMyTopics(userId),
    {
      enabled: !!userId,
    },
  );

  return { favorites: data || [] };
};
