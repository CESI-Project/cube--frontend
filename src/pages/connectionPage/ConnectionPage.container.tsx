import React from 'react';
import { Navigate } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { ConnectionPageComponent } from './ConnectionPage.component';
import { useConnection } from '../../hooks/reactQuery/useConnection';
import { useUserContext } from '../../context/user.context';

const messages = defineMessages({
  login_redirectLink: {
    defaultMessage: 'home',
    id: 'login.redirectLink',
  },
  login_toastMessage: {
    defaultMessage: 'Your account is desactivated!',
    id: 'login.toastMessage',
  },
});

export const ConnectionPageContainer = () => {
  const {
    mutate, isError, isSuccess, error,
  } = useConnection();
  const { setIsAuthenticated } = useUserContext();
  const { formatMessage } = useIntl();

  const onConnection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const user = { userName: username, password };
    mutate(user);
  };

  if (isSuccess) {
    setIsAuthenticated(true);
    return <Navigate to={`/${formatMessage(messages.login_redirectLink)}`} replace />;
  }

  if (isError) {
    // @ts-ignore
    if (error.response.data === 'User account desactivated!') {
      toast.error(formatMessage(messages.login_toastMessage), {
        toastId: 1,
      });
    }
  }

  return (
    <ConnectionPageComponent
      isError={isError}
      onConnection={onConnection}
      formatMessage={formatMessage}
    />
  );
};
