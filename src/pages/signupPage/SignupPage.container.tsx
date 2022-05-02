import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { SignupPageComponent } from './SignupPage.component';
import { useCreationAccount } from '../../hooks/reactQuery/useCreationAccount';
import { useUserContext } from '../../context/user.context';
import { User } from '../../models/User';
import { useUploadUserFile } from '../../hooks/reactQuery/useUploadUserFile';

const messages = defineMessages({
  signUp_redirectLink: {
    defaultMessage: 'home',
    id: 'signUp.redirectLink',
  },
});

export const SignupPageContainer = () => {
  const { mutate: createMutate, isError, isSuccess } = useCreationAccount();
  const { mutate: uploadMutate } = useUploadUserFile();
  const { setIsAuthenticated } = useUserContext();
  const { formatMessage } = useIntl();

  const onCreationAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const birthDate = formData.get('birth-date') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const file = formData.get('file');

    const user: User = {
      userName: username, birthDate, email, password,
    };

    createMutate(user);
  };

  if (isSuccess) {
    setIsAuthenticated(true);
    return <Navigate to={`/${formatMessage(messages.signUp_redirectLink)}`} replace />;
  }

  return (
    <SignupPageComponent isError={isError} onCreationAccount={onCreationAccount} />
  );
};
