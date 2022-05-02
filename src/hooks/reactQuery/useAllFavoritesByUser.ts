import { useQuery } from 'react-query';
import { getHisFavorite } from '../../services/favorite.service';

export const useAllFavoritesByUser = (userId: number | undefined) => {
  const { data } = useQuery(
    'all-favorites-by-user',
    () => getHisFavorite(userId),
  );

  return { favorites: data || [] };
};
