import React from 'react';
import './FavoritesPage.component.scss';
import { defineMessages, useIntl } from 'react-intl';
import { useAllFavoritesByUser } from '../../hooks/reactQuery/useAllFavoritesByUser';
import { Favorite } from '../../models/Favorite';
import { useUserContext } from '../../context/user.context';
import { deleteFavorite } from '../../services/favorite.service';
import { ButtonComponent } from '../../components/button/button.component';

const messages = defineMessages({
  favoritesPage_title: {
    defaultMessage: 'My favorites',
    id: 'favoritesPage.title',
  },
});

export const FavoritesPageComponent = () => {
  const { formatMessage } = useIntl();
  const { currentUser } = useUserContext();
  const { favorites } = useAllFavoritesByUser(currentUser?.id);

  const listFavorites = favorites.map((favorite: Favorite) => (
    <tr className="favorites-page__table__item">
      <td>
        {favorite.topicId}
      </td>
      <td>
        <ButtonComponent type="button" designType="empty" onClick={() => { deleteFavorite(favorite.topicId); }}>
          Delete
        </ButtonComponent>
      </td>
    </tr>
  ));

  return (
    <div className="favorites-page">
      <div className="favorites-page__title">
        {formatMessage(messages.favoritesPage_title)}
      </div>
      <table className="favorites-page__table">
        {listFavorites}
      </table>
    </div>
  );
};
