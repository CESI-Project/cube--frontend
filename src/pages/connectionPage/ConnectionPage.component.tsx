import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import './ConnectionPage.component.scss';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { useConnection } from '../../hooks/reactQuery/useConnection';

const messages = defineMessages({
  connectionPage_usernameInput: {
    defaultMessage: 'Your username',
    id: 'connectionPage.usernameInput',
  },
  connectionPage_passwordInput: {
    defaultMessage: 'Your password',
    id: 'connectionPage.passwordInput',
  },
  connectionPage_connectionTitle: {
    defaultMessage: 'Log In',
    id: 'connectionPage.connectionTitle',
  },
  connectionPage_usernameTitle: {
    defaultMessage: 'Username :',
    id: 'connectionPage.usernameTitle',
  },
  connectionPage_passwordTitle: {
    defaultMessage: 'Password :',
    id: 'connectionPage.passwordTitle',
  },
  connectionPage_submitConnection: {
    defaultMessage: 'Log In',
    id: 'connectionPage.submitConnection',
  },
  connectionPage_errorInput: {
    defaultMessage: 'Your Mail / Password is wrong',
    id: 'connectionPage.errorInput',
  },
});

export const ConnectionPageComponent = () => {
  const { formatMessage } = useIntl();
  const { mutate, isError } = useConnection();

  const onConnection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    mutate({ username, password });
  };

  return (
    <div className="connectionPage">
      <h1>{formatMessage(messages.connectionPage_connectionTitle)}</h1>
      <form className="connectionPage__wrapper" onSubmit={onConnection}>
        {isError && (
        <div className="connectionPage__error-input">
          {formatMessage(messages.connectionPage_errorInput)}
        </div>
        )}
        <div>
          <h2>
            {formatMessage(messages.connectionPage_usernameTitle)}
          </h2>
          <InputComponent name="username" type="text" inputsize="small" placeholder={formatMessage(messages.connectionPage_usernameInput)} />
        </div>
        <div>
          <h2>{formatMessage(messages.connectionPage_passwordTitle)}</h2>
          <InputComponent name="password" type="password" inputsize="small" placeholder={formatMessage(messages.connectionPage_passwordInput)} />
        </div>
        <div className="connectionPage__wrapper__connection-button">
          <ButtonComponent type="submit" designType="full" onClick={() => {}}>
            {formatMessage(messages.connectionPage_submitConnection)}
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};
