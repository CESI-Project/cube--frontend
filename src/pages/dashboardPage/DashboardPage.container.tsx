import { defineMessages, useIntl } from 'react-intl';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
import { useValidationTopic } from '../../hooks/reactQuery/useValidationTopic';
import { useActivatedAccount } from '../../hooks/reactQuery/useActivatedAccount';
import { useCreationSpecialAccount } from '../../hooks/reactQuery/useCreationSpecialAccount';
import { useNewTag } from '../../hooks/reactQuery/useNewTag';
import { Tag } from '../../models/Tag';
import { useAllFamilyTags } from '../../hooks/reactQuery/useAllFamilyTags';
import { FamilyTag } from '../../models/FamilyTag';
import { useAllTags } from '../../hooks/reactQuery/useAllTags';
import { deleteTag } from '../../services/tag.service';
import { deleteTopic } from '../../services/topic.service';
import { useStatistics } from '../../hooks/reactQuery/useStatistics';

const messages = defineMessages({
  dashboardPage_delete: {
    defaultMessage: 'Delete',
    id: 'dashboardPage.delete',
  },
  dashboardPage_deactivated: {
    defaultMessage: 'Deactivated',
    id: 'dashboardPage.deactivated',
  },
  dashboardPage_activated: {
    defaultMessage: 'Activated',
    id: 'dashboardPage.activated',
  },
  dashboardPage_connectionNotification: {
    defaultMessage: 'Please login to see your dashboard',
    id: 'dashboardPage.connectionNotification',
  },
  dashboardPage_approvedButton: {
    defaultMessage: 'Approved',
    id: 'dashboardPage.approvedButton',
  },
  dashboardPage_nothing: {
    defaultMessage: 'Nothing Here',
    id: 'dashboardPage.nothing',
  },
  dashboardPage_topicLink: {
    defaultMessage: 'topic',
    id: 'dashboardPage.topicLink',
  },
  dashboardPage_successAlert: {
    defaultMessage: 'Account created successfully',
    id: 'dashboardPage.successAlert',
  },
  dashboardPage_successTagAlert: {
    defaultMessage: 'Tag created successfully',
    id: 'dashboardPage.successTagAlert',
  },
});

export const DashboardPageContainer = () => {
  const { currentUser } = useUserContext();
  const { formatMessage } = useIntl();
  if (currentUser === undefined) {
    toast.error(formatMessage(messages.dashboardPage_connectionNotification), {
      toastId: 1,
    });
    return (
      <Navigate to="/home" replace />
    );
  }

  const { mutate: accountMutate, isSuccess: successAccount } = useCreationSpecialAccount();
  const { mutate: newTag, isSuccess: successTag } = useNewTag();
  const { familyTags } = useAllFamilyTags();
  const { tags } = useAllTags(familyTags.map((familyTag: FamilyTag) => familyTag.id));
  const { favorites } = useAllFavoritesByUser(currentUser?.id);
  const { views } = useViewByUser(currentUser?.id);
  const { topics } = useAllTopics();
  const { totalTopic } = useTotalTopics();
  const { totalViews } = useTotalViews();
  const { totalUsers } = useTotalUsers();
  const { allUsers } = useAllUsers(currentUser?.id);
  const { statistics } = useStatistics(currentUser?.id);
  const { mutate: deactivatedAccount } = useDeactivatedAccount();
  const { mutate: activateAccount } = useActivatedAccount();
  const { mutate: validationTopic } = useValidationTopic();
  const [roleValue, setRoleValue] = useState<string>();

  const listFavorites = favorites.map((favorite: Favorite) => (
    <tr key={favorite.id}>
      <td>
        {favorite.topicId}
      </td>
      <td>
        <ButtonComponent type="button" designType="empty" onClick={() => { deleteFavorite(favorite.topicId); }}>
          {formatMessage(messages.dashboardPage_delete)}
        </ButtonComponent>
      </td>
    </tr>
  ));

  const listTopics = topics.map((topic: Topic) => (
    <tr key={topic.id}>
      <td>
        {topic.title}
      </td>
      <td>
        <ButtonComponent type="button" designType="empty" onClick={() => { deleteTopic(topic.id); }}>
          {formatMessage(messages.dashboardPage_delete)}
        </ButtonComponent>
      </td>
    </tr>
  ));

  const listTopicsWaitingState = topics.map((topic: Topic) => (
    <tbody key={topic.id}>
      {topic.isValidated === false && (
        <tr>
          <td>
            <Link to={`/${formatMessage(messages.dashboardPage_topicLink)}/${topic.id}`}>
              {topic.title}
            </Link>
          </td>
          <td>
            <ButtonComponent type="button" designType="empty" onClick={() => { validationTopic(topic.id); }}>
              {formatMessage(messages.dashboardPage_approvedButton)}
            </ButtonComponent>
          </td>
        </tr>
      )}
    </tbody>
  ));

  const listUsers = allUsers.map((user: User) => (
    <tr key={user.id}>
      <td>
        {user.userName}
      </td>
      <td>
        {(user.isActivated ? (
          <ButtonComponent type="button" designType="empty" onClick={() => { deactivatedAccount(user.id); }}>
            {formatMessage(messages.dashboardPage_deactivated)}
          </ButtonComponent>
        ) : (
          <ButtonComponent type="button" designType="empty" onClick={() => { activateAccount(user.id); }}>
            {formatMessage(messages.dashboardPage_activated)}
          </ButtonComponent>
        ))}
      </td>
    </tr>
  ));

  const listTags = tags.map((tag: Tag) => (
    <tr key={tag.id}>
      <td>
        {tag.nameFr}
      </td>
      <td>
        <ButtonComponent type="button" designType="empty" onClick={() => { deleteTag(tag.id); }}>
          {formatMessage(messages.dashboardPage_delete)}
        </ButtonComponent>
      </td>
    </tr>
  ));

  const onChangeRoleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoleValue(event.target.value);
  };

  const onCreationSpecialAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const role = new Array(roleValue as string);

    const user: User = {
      // @ts-ignore
      userName: username, password, role,
    };

    accountMutate(user);
  };

  if (successAccount) {
    toast.success(formatMessage(messages.dashboardPage_successAlert), {
      toastId: 1,
    });
  }

  const onCreationTag = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const nameFr = formData.get('nameFr') as string;
    const nameEn = formData.get('nameFr') as string;
    const familyTagName = formData.get('familyTagName') as string;

    const familyTagId = familyTags.find((familyTag: FamilyTag) => familyTag.nameFr === familyTagName)?.id;

    const tag: Tag = { nameFr, nameEn, familyTagId };

    newTag(tag);
  };

  if (successTag) {
    toast.success(formatMessage(messages.dashboardPage_successTagAlert), {
      toastId: 1,
    });
  }

  console.log(statistics);

  return (
    <DashboardPageComponent
      currentUser={currentUser}
      formatMessage={formatMessage}
      listFavorites={listFavorites}
      listTopics={listTopics}
      listUsers={listUsers}
      listTopicsWaitingState={listTopicsWaitingState}
      totalTopic={totalTopic}
      totalUsers={totalUsers}
      totalViews={totalViews}
      views={views}
      onCreationSpecialAccount={onCreationSpecialAccount}
      onChangeRoleValue={onChangeRoleValue}
      onCreationTag={onCreationTag}
      listTags={listTags}
    />
  );
};
