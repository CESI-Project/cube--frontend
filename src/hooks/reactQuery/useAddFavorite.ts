import { useMutation } from 'react-query';
import { postFavorite } from '../../services/favorite.service';

export const useAddFavorite = () => useMutation('add-favorite', postFavorite);
