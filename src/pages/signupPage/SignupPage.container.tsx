import React from 'react';
import { SignupPageComponent } from './SignupPage.component';
import { useCreationAccount } from '../../hooks/reactQuery/useCreationAccount';

export const SignupPageContainer = () => {
  const { mutate, isError } = useCreationAccount();

  const onCreationAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const birthDate = formData.get('birth-date') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    mutate({
      username, birthDate, email, password,
    });
  };
  return (
    <SignupPageComponent isError={isError} onCreationAccount={onCreationAccount} />
  );
};
