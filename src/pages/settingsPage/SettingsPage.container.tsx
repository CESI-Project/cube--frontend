import { defineMessages, useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import React from 'react';
import { useUserContext } from '../../context/user.context';
import { SettingsPageComponent } from './SettingsPage.component';

const messages = defineMessages({
  settingsPage_connectionNotification: {
    defaultMessage: 'Please login to see your settings',
    id: 'settingsPage.connectionNotification',
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

  return (
    <SettingsPageComponent formatMessage={formatMessage} />
  );
};
