import React from 'react';
import './DashboardPage.component.scss';
import { defineMessages, useIntl } from 'react-intl';
import { useAllFavoritesByUser } from '../../hooks/reactQuery/useAllFavoritesByUser';
import { Favorite } from '../../models/Favorite';
import { useUserContext } from '../../context/user.context';
import { deleteFavorite } from '../../services/favorite.service';
import { ButtonComponent } from '../../components/button/button.component';
import { useViewByUser } from '../../hooks/reactQuery/useViewByUser';
import { useAllTopics } from '../../hooks/reactQuery/useAllTopics';
import { Topic } from '../../models/Topic';
import { useTotalTopics } from '../../hooks/reactQuery/useTotalTopics';
import { useTotalViews } from '../../hooks/reactQuery/useTotalViews';
import { useTotalUsers } from '../../hooks/reactQuery/useTotalUsers';
import { useAllUsers } from '../../hooks/reactQuery/useAllUsers';
import { User } from '../../models/User';
import { useDeactivatedAccount } from '../../hooks/reactQuery/useDeactivatedAccount';
import { InputComponent } from '../../components/input/input.component';

const messages = defineMessages({
  dashboardPage_title: {
    defaultMessage: 'My dashboard',
    id: 'dashboardPage.title',
  },
  dashboardPage_viewCounterTitle: {
    defaultMessage: 'My views counter : ',
    id: 'dashboardPage.viewCounterTitle',
  },
  dashboardPage_totalTopicTitle: {
    defaultMessage: 'Total topic',
    id: 'dashboardPage.totalTopicTitle',
  },
  dashboardPage_totalTopicCounter: {
    defaultMessage: 'Total topics : ',
    id: 'dashboardPage.totalTopicCounter',
  },
  dashboardPage_totalViewCounter: {
    defaultMessage: 'Total views : ',
    id: 'dashboardPage.totalViewCounter',
  },
  dashboardPage_totalUserCounter: {
    defaultMessage: 'Total users : ',
    id: 'dashboardPage.totalUserCounter',
  },
  dashboardPage_delete: {
    defaultMessage: 'Delete',
    id: 'dashboardPage.delete',
  },
  dashboardPage_listTopicTitle: {
    defaultMessage: 'Topic list :',
    id: 'dashboardPage.listTopicTitle',
  },
  dashboardPage_listAccount: {
    defaultMessage: 'Account list :',
    id: 'dashboardPage.listAccount',
  },
  dashboardPage_deactivated: {
    defaultMessage: 'Deactivated',
    id: 'dashboardPage.deactivated',
  },
  dashboardPage_usernameInput: {
    defaultMessage: 'username',
    id: 'dashboardPage.usernameInput',
  },
  dashboardPage_passwordInput: {
    defaultMessage: 'password',
    id: 'dashboardPage.passwordInput',
  },
  dashboardPage_usernameTitle: {
    defaultMessage: 'Username :',
    id: 'dashboardPage.usernameTitle',
  },
  dashboardPage_passwordTitle: {
    defaultMessage: 'Password :',
    id: 'dashboardPage.passwordTitle',
  },
  dashboardPage_submitConnection: {
    defaultMessage: 'Add User',
    id: 'dashboardPage.submitConnection',
  },
});

export const DashboardPageComponent = () => {
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
        {/* <ButtonComponent type="button" designType="empty" onClick={() => { deleteTopic(topic.topicId); }}> */}
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
    <div className="dashboard-page">
      <div className="dashboard-page__title">
        {formatMessage(messages.dashboardPage_title)}
      </div>
      {(currentUser?.roles?.join() === 'ROLE_USER' || currentUser?.roles?.join() === 'ROLE_MODERATOR') && (
      <div className="dashboard-page__wrapper">
        <div className="dashboard-page__wrapper__table">
          {formatMessage(messages.dashboardPage_title)}
          <div className="dashboard-page__wrapper__table__table-content">
            <table>
              <tbody>
                {listFavorites}
              </tbody>
            </table>
          </div>
        </div>
        <div className="dashboard-page__wrapper__right">
          <p>
            {formatMessage(messages.dashboardPage_viewCounterTitle)}
            {views}
          </p>
        </div>
      </div>
      )}
      {(currentUser?.roles?.join() === 'ROLE_USER' || currentUser?.roles?.join() === 'ROLE_SUPERADMIN') && (
      <div className="dashboard-page__wrapper">
        <div className="dashboard-page__wrapper__table">
          <h2>
            {formatMessage(messages.dashboardPage_listTopicTitle)}
          </h2>
          <div className="dashboard-page__wrapper__table__table-content">
            <table>
              <tbody>
                {listTopics}
              </tbody>
            </table>
          </div>
          <h2>
            {formatMessage(messages.dashboardPage_listAccount)}
          </h2>
          <div className="dashboard-page__wrapper__table__table-content">
            <table>
              <tbody>
                {listUsers}
              </tbody>
            </table>
          </div>
          <form className="dashboard-page__wrapper__table__table-content" onSubmit={() => {}}>
            <div>
              <h2>
                {formatMessage(messages.dashboardPage_usernameTitle)}
              </h2>
              <InputComponent name="username" type="text" inputsize="small" placeholder={formatMessage(messages.dashboardPage_usernameInput)} />
            </div>
            <div>
              <h2>{formatMessage(messages.dashboardPage_passwordTitle)}</h2>
              <InputComponent name="password" type="password" inputsize="small" placeholder={formatMessage(messages.dashboardPage_passwordInput)} />
            </div>
            <div>
              <div className="dashboard-page__wrapper__table__table-content__checkbox">
                <input type="checkbox" name="private" onChange={() => {}} />
                admin
                <input type="checkbox" name="private" onChange={() => {}} />
                modo
                <input type="checkbox" name="private" onChange={() => {}} />
                Super-Admin
              </div>
            </div>
            <div className="dashboard-page__wrapper__table__table-content__button">
              <ButtonComponent type="submit" designType="full" onClick={() => {}}>
                {formatMessage(messages.dashboardPage_submitConnection)}
              </ButtonComponent>
            </div>
          </form>
        </div>
        <div className="dashboard-page__wrapper__right">
          <p>
            {formatMessage(messages.dashboardPage_totalTopicCounter)}
            {totalTopic}
          </p>
          <p>
            {formatMessage(messages.dashboardPage_totalViewCounter)}
            {totalViews}
          </p>
          <p>
            {formatMessage(messages.dashboardPage_totalUserCounter)}
            {totalUsers}
          </p>
        </div>
      </div>
      )}
    </div>
  );
};
