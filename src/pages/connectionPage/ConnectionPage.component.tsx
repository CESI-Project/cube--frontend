import React, { FC } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import './ConnectionPage.component.scss';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { useConnection } from '../../hooks/reactQuery/useConnection';
import { Consumer } from '../../models/Consumer';

const messages = defineMessages({
  ConnectionPage_mailInput: {
    defaultMessage: 'Your email',
    id: 'connectionPage.mailInput',
  },
  ConnectionPage_passwordInput: {
    defaultMessage: 'Your password',
    id: 'connectionPage.passwordInput',
  },
  ConnectionPage_connectionTitle: {
    defaultMessage: 'Log In',
    id: 'connectionPage.connectionTitle',
  },
  ConnectionPage_mailTitle: {
    defaultMessage: 'Mail :',
    id: 'connectionPage.mailTitle',
  },
  ConnectionPage_passwordTitle: {
    defaultMessage: 'Password :',
    id: 'connectionPage.passwordTitle',
  },
  ConnectionPage_submitConnection: {
    defaultMessage: 'Log In',
    id: 'connectionPage.submitConnection',
  },
});

interface ConnectionPageComponentProps {
  truc: Consumer
}

export const ConnectionPageComponent: FC<ConnectionPageComponentProps> = () => {
  const { formatMessage } = useIntl();
  const { mutate } = useConnection();

  const onConnection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    mutate({ email, password });
  };

  return (
    <div className="connectionPage">
      <h1>{formatMessage(messages.ConnectionPage_connectionTitle)}</h1>
      <form className="connectionPage__wrapper" onSubmit={onConnection}>
        <div>
          <h2>
            {formatMessage(messages.ConnectionPage_mailTitle)}
          </h2>
          <InputComponent name="email" type="email" inputsize="small" placeholder={formatMessage(messages.ConnectionPage_mailInput)} />
        </div>
        <div>
          <h2>{formatMessage(messages.ConnectionPage_passwordTitle)}</h2>
          <InputComponent name="password" type="password" inputsize="small" placeholder={formatMessage(messages.ConnectionPage_passwordInput)} />
        </div>
        <div className="connectionPage__wrapper__connection-button">
          <ButtonComponent type="submit" designType="full">
            {formatMessage(messages.ConnectionPage_submitConnection)}
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};
