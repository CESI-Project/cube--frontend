import { defineMessages, useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import React from 'react';
import { useUserContext } from '../../context/user.context';
import { SettingsPageComponent } from './SettingsPage.component';
import { User } from '../../models/User';
import { useModifyProfile } from '../../hooks/reactQuery/useModifyProfile';

const messages = defineMessages({
  settingsPage_connectionNotification: {
    defaultMessage: 'Please login to see your settings',
    id: 'settingsPage.connectionNotification',
  },
  settingsPage_successNotification: {
    defaultMessage: 'Modification saved',
    id: 'settingsPage.successNotification',
  },
});

export const SettingsPageContainer = () => {
  const { currentUser } = useUserContext();
  const { formatMessage } = useIntl();
  if (currentUser === undefined) {
    toast.error(formatMessage(messages.settingsPage_connectionNotification), {
      toastId: 1,
    });
    return (
      <Navigate to="/home" replace />
    );
  }

  const { mutate, isSuccess } = useModifyProfile();

  const onModifyProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const userName = formData.get('userName') as string;
    const password = formData.get('password') as string;

    // @ts-ignore
    const modifyProfile: User = {
      id: currentUser.id,
      email,
      userName,
      password,
    };

    mutate(modifyProfile);
  };

  if (isSuccess) {
    toast.success(formatMessage(messages.settingsPage_successNotification), {
      toastId: 1,
    });
  }

  return (
    <SettingsPageComponent formatMessage={formatMessage} currentUser={currentUser} onModifyProfile={onModifyProfile} />
  );
};
