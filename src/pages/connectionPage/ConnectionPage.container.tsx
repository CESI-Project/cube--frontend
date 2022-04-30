import React from 'react';
import { ConnectionPageComponent } from './ConnectionPage.component';
import { useConnection } from '../../hooks/reactQuery/useConnection';

export const ConnectionPageContainer = () => {
  const { mutate, isError } = useConnection();

  const onConnection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    mutate({ username, password });
  };

  return (
    <ConnectionPageComponent isError={isError} onConnection={onConnection} />
  );
};
