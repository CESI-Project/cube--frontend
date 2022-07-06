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
  dashboardPage_waitingTopicTitle: {
    defaultMessage: 'Waiting topic :',
    id: 'dashboardPage.waitingTopicTitle',
  },
  dashboardPage_statsTitle: {
    defaultMessage: 'Stats :',
    id: 'dashboardPage.statsTitle',
  },
  dashboardPage_creationAccountTitle: {
    defaultMessage: 'Creation Account :',
    id: 'dashboardPage.creationAccountTitle',
  },
  dashboardPage_favoritesTopicTitle: {
    defaultMessage: 'Favorites Topic List :',
    id: 'dashboardPage.favoriteTopicTitle',
  },
  dashboardPage_newTagTitle: {
    defaultMessage: 'Add new tag',
    id: 'dashboardPage.newTagTitle',
  },
  dashboardPage_tagNameTitle: {
    defaultMessage: 'New tag name :',
    id: 'dashboardPage.tagNameTitle',
  },
  dashboardPage_tagNameInput: {
    defaultMessage: 'War',
    id: 'dashboardPage.tagNameInput',
  },
  dashboardPage_familyTagNameTitle: {
    defaultMessage: 'Tag family :',
    id: 'dashboardPage.familyTagNameTitle',
  },
  dashboardPage_familyTagNameInput: {
    defaultMessage: 'Social Security',
    id: 'dashboardPage.familyTagNameInput',
  },
  dashboardPage_submitTag: {
    defaultMessage: 'Create tag',
    id: 'dashboardPage.submitTag',
  },
  dashboardPage_listTagTitle: {
    defaultMessage: 'Tags List : ',
    id: 'dashboardPage.listTagTitle',
  },
  dashboardPage_totalCommentsCounter: {
    defaultMessage: 'Total comments : ',
    id: 'dashboardPage.totalCommentsCounter',
  },
  dashboardPage_totalTagsCounter: {
    defaultMessage: 'Total tags : ',
    id: 'dashboardPage.totalTagsCounter',
  },
  dashboardPage_totalResponseCommentsCounter: {
    defaultMessage: 'Total response comments : ',
    id: 'dashboardPage.totalResponseCommentsCounter',
  },
  dashboardPage_averageCommentsByTopicCounter: {
    defaultMessage: 'Average comments by topic : ',
    id: 'dashboardPage.averageCommentsByTopicCounter',
  },
  dashboardPage_averageReponseCommentsByTopicCounter: {
    defaultMessage: 'Average response comments by topic : ',
    id: 'dashboardPage.averageReponseCommentsByTopicCounter',
  },
});

interface DashboardPageComponentProps {
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
  onCreationSpecialAccount: (e: React.FormEvent<HTMLFormElement>) => void;
  currentUser: User | undefined;
  listFavorites: ReactNode;
  listTopics: ReactNode;
  listUsers: ReactNode;
  listTopicsWaitingState: ReactNode;
  listTags: ReactNode;
  totalTopics: number;
  totalTopicViews: number;
  totalUsers: number;
  views: number;
  onChangeRoleValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCreationTag: (e: React.FormEvent<HTMLFormElement>) => void;
  totalTags: number;
  totalComments: number;
  totalResponseComments: number;
  averageCommentsByTopic: number;
  averageResponseCommentsByTopic: number;
}

export const DashboardPageComponent: FC<DashboardPageComponentProps> = ({
  formatMessage,
  currentUser,
  listFavorites,
  listTopics,
  listUsers,
  listTopicsWaitingState,
  listTags,
  totalTopics,
  totalTopicViews,
  totalUsers,
  views,
  onCreationSpecialAccount,
  onChangeRoleValue,
  onCreationTag,
  totalTags,
  totalComments,
  totalResponseComments,
  averageCommentsByTopic,
  averageResponseCommentsByTopic,
}) => (
  <div className="dashboard-page">
    <h1>
      {formatMessage(messages.dashboardPage_title)}
    </h1>
    {(currentUser?.roles?.join() === 'ROLE_USER' || currentUser?.roles?.join() === 'ROLE_MODERATOR') && (
    <div>
      <h2>
        {formatMessage(messages.dashboardPage_favoritesTopicTitle)}
      </h2>
      <div className="dashboard-page__row-table__table">
        <table>
          <tbody>
            {listFavorites}
          </tbody>
        </table>
      </div>
      <div className="dashboard-page__row-table__table">
        <h2 className="dashboard-page__stats__title">
          {formatMessage(messages.dashboardPage_statsTitle)}
        </h2>
        <p>
          {formatMessage(messages.dashboardPage_viewCounterTitle)}
          {views}
        </p>
      </div>
    </div>
    )}
    <div className="dashboard-page__row-table">
      {(currentUser?.roles?.join() === 'ROLE_MODERATOR' || currentUser?.roles?.join() === 'ROLE_ADMIN' || currentUser?.roles?.join() === 'ROLE_SUPERADMIN') && (
        <div>
          <h2>
            {formatMessage(messages.dashboardPage_waitingTopicTitle)}
          </h2>
          <div className="dashboard-page__row-table__table">
            <table>
              {listTopicsWaitingState}
            </table>
          </div>
        </div>
      )}
      {(currentUser?.roles?.join() === 'ROLE_ADMIN' || currentUser?.roles?.join() === 'ROLE_SUPERADMIN') && (
      <div>
        <h2>
          {formatMessage(messages.dashboardPage_listTopicTitle)}
        </h2>
        <div className="dashboard-page__row-table__table">
          <table>
            <tbody>
              {listTopics}
            </tbody>
          </table>
        </div>
      </div>
      )}
      {(currentUser?.roles?.join() === 'ROLE_ADMIN' || currentUser?.roles?.join() === 'ROLE_SUPERADMIN') && (
      <div>
        <h2>
          {formatMessage(messages.dashboardPage_listAccount)}
        </h2>
        <div className="dashboard-page__row-table__table">
          <table>
            <tbody>
              {listUsers}
            </tbody>
          </table>
        </div>
      </div>
      )}
      {(currentUser?.roles?.join() === 'ROLE_ADMIN' || currentUser?.roles?.join() === 'ROLE_SUPERADMIN') && (
      <div>
        <h2>
          {formatMessage(messages.dashboardPage_listTagTitle)}
        </h2>
        <div className="dashboard-page__row-table__table">
          <table>
            <tbody>
              {listTags}
            </tbody>
          </table>
        </div>
      </div>
      )}
    </div>
    <div className="dashboard-page__forms">
      {currentUser?.roles?.join() === 'ROLE_SUPERADMIN' && (
      <form className="dashboard-page__creation-account" onSubmit={onCreationSpecialAccount}>
        <h2 className="dashboard-page__creation-account__title">
          {formatMessage(messages.dashboardPage_creationAccountTitle)}
        </h2>
        <div>
          <h2>{formatMessage(messages.dashboardPage_usernameTitle)}</h2>
          <InputComponent name="username" type="text" inputsize="small" placeholder={formatMessage(messages.dashboardPage_usernameInput)} />
        </div>
        <div>
          <h2>{formatMessage(messages.dashboardPage_passwordTitle)}</h2>
          <InputComponent name="password" type="password" inputsize="small" placeholder={formatMessage(messages.dashboardPage_passwordInput)} />
        </div>
        <div className="dashboard-page__creation-account__checkbox">
          <input type="checkbox" name="private" value="mode" onChange={onChangeRoleValue} />
          {formatMessage(messages.dashboardPage_moderatorCheckbox)}
          <input type="checkbox" name="private" value="admin" onChange={onChangeRoleValue} />
          {formatMessage(messages.dashboardPage_adminCheckbox)}
          <input type="checkbox" name="private" value="superAdmin" onChange={onChangeRoleValue} />
          {formatMessage(messages.dashboardPage_superAdminCheckbox)}
        </div>
        <div className="dashboard-page__creation-account__button">
          <ButtonComponent type="submit" designType="full">
            {formatMessage(messages.dashboardPage_submitConnection)}
          </ButtonComponent>
        </div>
      </form>
      )}
      {(currentUser?.roles?.join() === 'ROLE_ADMIN' || currentUser?.roles?.join() === 'ROLE_SUPERADMIN') && (
      <form className="dashboard-page__creation-account" onSubmit={onCreationTag}>
        <h2 className="dashboard-page__creation-account__title">
          {formatMessage(messages.dashboardPage_newTagTitle)}
        </h2>
        <div>
          <h2>{formatMessage(messages.dashboardPage_tagNameTitle)}</h2>
          <InputComponent name="nameFr" type="text" inputsize="small" placeholder={formatMessage(messages.dashboardPage_tagNameInput)} />
        </div>
        <div>
          <h2>{formatMessage(messages.dashboardPage_familyTagNameTitle)}</h2>
          <InputComponent name="familyTagName" type="text" inputsize="small" placeholder={formatMessage(messages.dashboardPage_familyTagNameInput)} />
        </div>
        <div className="dashboard-page__creation-account__button">
          <ButtonComponent type="submit" designType="full">
            {formatMessage(messages.dashboardPage_submitTag)}
          </ButtonComponent>
        </div>
      </form>
      )}
    </div>
    {(currentUser?.roles?.join() === 'ROLE_ADMIN' || currentUser?.roles?.join() === 'ROLE_SUPERADMIN') && (
    <div className="dashboard-page__stats">
      <h2 className="dashboard-page__stats__title">
        {formatMessage(messages.dashboardPage_statsTitle)}
      </h2>
      <div className="dashboard-page__stats__row">
        <div>
          <p>
            {formatMessage(messages.dashboardPage_totalTopicCounter)}
            {totalTopics}
          </p>
          <p>
            {formatMessage(messages.dashboardPage_totalViewCounter)}
            {totalTopicViews}
          </p>
          <p>
            {formatMessage(messages.dashboardPage_totalUserCounter)}
            {totalUsers}
          </p>
          <p>
            {formatMessage(messages.dashboardPage_totalCommentsCounter)}
            {totalComments}
          </p>
          <p>
            {formatMessage(messages.dashboardPage_totalTagsCounter)}
            {totalTags}
          </p>
          <p>
            {formatMessage(messages.dashboardPage_totalResponseCommentsCounter)}
            {totalResponseComments}
          </p>
          <p>
            {formatMessage(messages.dashboardPage_averageCommentsByTopicCounter)}
            {averageCommentsByTopic}
          </p>
          <p>
            {formatMessage(messages.dashboardPage_averageReponseCommentsByTopicCounter)}
            {averageResponseCommentsByTopic}
          </p>
        </div>
      </div>
    </div>
    )}
  </div>
);
