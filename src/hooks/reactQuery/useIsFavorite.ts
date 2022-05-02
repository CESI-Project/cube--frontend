import { useQuery } from 'react-query';
import { getIsFavorite } from '../../services/favorite.service';
import { Favorite } from '../../models/Favorite';

export const useIsFavorite = ({ userId, topicId }:Favorite) => {
  const { data } = useQuery(
    'is-favorites-by-topic',
    () => getIsFavorite({ userId, topicId }),
    {
      enabled: !!userId,
    },
  );

  return { isFavorite: data || [] };
};
