import { useQuery } from 'react-query';
import { getIsFavorite } from '../../services/favorite.service';
import { Favorite } from '../../models/Favorite';

export const useIsFavorite = ({ id, userId, topicId }:Favorite) => {
  const { data } = useQuery(
    'is-favorites-by-topic',
    () => getIsFavorite({ id, userId, topicId }),
  );

  return { isFavorite: data || [] };
};
