import React, { FC, ReactNode } from 'react';
import './DashboardPage.component.scss';
import { defineMessages } from 'react-intl';
import { ButtonComponent } from '../../components/button/Button.component';
import { User } from '../../models/User';
import { InputComponent } from '../../components/input/Input.component';

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
  dashboardPage_listTopicTitle: {
    defaultMessage: 'Topic list :',
    id: 'dashboardPage.listTopicTitle',
  },
  dashboardPage_listAccount: {
    defaultMessage: 'Account list :',
    id: 'dashboardPage.listAccount',
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
  dashboardPage_moderatorCheckbox: {
    defaultMessage: 'Modo',
    id: 'dashboardPage.moderatorCheckbox',
  },
  dashboardPage_adminCheckbox: {
    defaultMessage: 'Admin',
    id: 'dashboardPage.adminCheckbox',
  },
  dashboardPage_superAdminCheckbox: {
    defaultMessage: 'Super Admin',
    id: 'dashboardPage.superAdminCheckbox',
  },
});

interface DashboardPageComponentProps {
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
  currentUser: User | undefined;
  listFavorites: ReactNode;
  listTopics: ReactNode;
  listUsers: ReactNode;
  totalTopic: number;
  totalViews: number;
  totalUsers: number;
  views: number;
}

export const DashboardPageComponent: FC<DashboardPageComponentProps> = ({
  formatMessage,
  currentUser,
  listFavorites,
  listTopics,
  listUsers,
  totalTopic,
  totalViews,
  totalUsers,
  views,
}) => (
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
    {(currentUser?.roles?.join() === 'ROLE_ADMIN' || currentUser?.roles?.join() === 'ROLE_SUPERADMIN') && (
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
              {formatMessage(messages.dashboardPage_moderatorCheckbox)}
              <input type="checkbox" name="private" onChange={() => {}} />
              {formatMessage(messages.dashboardPage_adminCheckbox)}
              <input type="checkbox" name="private" onChange={() => {}} />
              {formatMessage(messages.dashboardPage_superAdminCheckbox)}
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
