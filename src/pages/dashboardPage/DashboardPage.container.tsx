import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import { DashboardPageComponent } from './DashboardPage.component';
import { useUserContext } from '../../context/user.context';
import { useAllFavoritesByUser } from '../../hooks/reactQuery/useAllFavoritesByUser';
import { useViewByUser } from '../../hooks/reactQuery/useViewByUser';
import { useAllTopics } from '../../hooks/reactQuery/useAllTopics';
import { useTotalTopics } from '../../hooks/reactQuery/useTotalTopics';
import { useTotalViews } from '../../hooks/reactQuery/useTotalViews';
import { useTotalUsers } from '../../hooks/reactQuery/useTotalUsers';
import { useAllUsers } from '../../hooks/reactQuery/useAllUsers';
import { useDeactivatedAccount } from '../../hooks/reactQuery/useDeactivatedAccount';
import { Favorite } from '../../models/Favorite';
import { ButtonComponent } from '../../components/button/Button.component';
import { deleteFavorite } from '../../services/favorite.service';
import { Topic } from '../../models/Topic';
import { User } from '../../models/User';

const messages = defineMessages({
  dashboardPage_delete: {
    defaultMessage: 'Delete',
    id: 'dashboardPage.delete',
  },
  dashboardPage_deactivated: {
    defaultMessage: 'Deactivated',
    id: 'dashboardPage.deactivated',
  },
});

export const DashboardPageContainer = () => {
  const { formatMessage } = useIntl();
  const { currentUser } = useUserContext();
  const { favorites } = useAllFavoritesByUser(currentUser?.id);
  const { views } = useViewByUser(currentUser?.id);
  const { topics } = useAllTopics();
  const { totalTopic } = useTotalTopics();
  const { totalViews } = useTotalViews();
  const { totalUsers } = useTotalUsers();
  const { allUsers } = useAllUsers(currentUser?.id);
  const { mutate } = useDeactivatedAccount();

  const listFavorites = favorites.map((favorite: Favorite) => (
    <tr className="dashboard-page__table__item" key={favorite.id}>
      <td>
        {favorite.topicId}
      </td>
      <td className="dashboard-page__table__right">
        <ButtonComponent type="button" designType="empty" onClick={() => { deleteFavorite(favorite.topicId); }}>
          {formatMessage(messages.dashboardPage_delete)}
        </ButtonComponent>
      </td>
    </tr>
  ));

  const listTopics = topics.map((topic: Topic) => (
    <tr className="dashboard-page__table__item" key={topic.id}>
      <td>
        {topic.title}
      </td>
      <td className="dashboard-page__table__table-content__right">
        <ButtonComponent type="button" designType="empty" onClick={() => {}}>
          {formatMessage(messages.dashboardPage_delete)}
        </ButtonComponent>
      </td>
    </tr>
  ));

  const listUsers = allUsers.map((user: User) => (
    <tr className="dashboard-page__table__item" key={user.id}>
      <td>
        {user.userName}
      </td>
      <td className="dashboard-page__table__table-content__right">
        <ButtonComponent type="button" designType="empty" onClick={() => { mutate(user.id); }}>
          {formatMessage(messages.dashboardPage_deactivated)}
        </ButtonComponent>
      </td>
    </tr>
  ));

  return (
    <DashboardPageComponent
      currentUser={currentUser}
      formatMessage={formatMessage}
      listFavorites={listFavorites}
      listTopics={listTopics}
      listUsers={listUsers}
      totalTopic={totalTopic}
      totalUsers={totalUsers}
      totalViews={totalViews}
      views={views}
    />
  );
};
