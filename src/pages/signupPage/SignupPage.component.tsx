import { defineMessages, useIntl } from 'react-intl';
import './SignupPage.component.scss';
import React, { FC } from 'react';
import { InputComponent } from '../../components/input/Input.component';
import { ButtonComponent } from '../../components/button/Button.component';

const messages = defineMessages({
  signupPage_mailInput: {
    defaultMessage: 'john.doe@mail.com',
    id: 'signupPage.mailInput',
  },
  signupPage_usernameInput: {
    defaultMessage: 'John33',
    id: 'signupPage.usernameInput',
  },
  signupPage_firstNameInput: {
    defaultMessage: 'John',
    id: 'signupPage.firstNameInput',
  },
  signupPage_firstNameTitle: {
    defaultMessage: 'Your first name',
    id: 'signupPage.firstNameTitle',
  },
  signupPage_nameInput: {
    defaultMessage: 'Doe',
    id: 'signupPage.nameInput',
  },
  signupPage_usernameTitle: {
    defaultMessage: 'Username',
    id: 'signupPage.usernameTitle',
  },
  signupPage_ageInput: {
    defaultMessage: '19',
    id: 'signupPage.ageInput',
  },
  signupPage_passwordInput: {
    defaultMessage: 'Your password',
    id: 'signupPage.passwordInput',
  },
  signupPage_signupTitle: {
    defaultMessage: 'Sign Up',
    id: 'signupPage.signupTitle',
  },
  signupPage_mailTitle: {
    defaultMessage: 'Mail :',
    id: 'signupPage.mailTitle',
  },
  signupPage_nameTitle: {
    defaultMessage: 'Your name',
    id: 'signupPage.nameTitle',
  },
  signupPage_ageTitle: {
    defaultMessage: 'Your age',
    id: 'signupPage.ageTitle',
  },
  signupPage_passwordTitle: {
    defaultMessage: 'Password :',
    id: 'signupPage.passwordTitle',
  },
  signupPage_submitSignUp: {
    defaultMessage: 'Sign Up',
    id: 'signupPage.submitSignUp',
  },
  signupPage_errorInput: {
    defaultMessage: 'Your information is incorrect or already used',
    id: 'signupPage.errorInput',
  },
});

interface SignupPageComponentProps {
  isError: boolean;
  onCreationAccount: (e: React.FormEvent<HTMLFormElement>) => void;
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
}

export const SignupPageComponent: FC<SignupPageComponentProps> = ({
  isError, onCreationAccount, formatMessage,
}) => (
  <div className="signup-page">
    <h1>{formatMessage(messages.signupPage_signupTitle)}</h1>
    <form className="signup-page__wrapper" onSubmit={onCreationAccount}>
      {isError && (
        <div className="signup-page__wrapper__error-input">
          {formatMessage(messages.signupPage_errorInput)}
        </div>
      )}
      <div className="signup-page__wrapper__mail-input">
        <h2>{formatMessage(messages.signupPage_mailTitle)}</h2>
        <InputComponent type="email" name="email" inputsize="small" placeholder={formatMessage(messages.signupPage_mailInput)} />
      </div>
      <div className="signup-page__wrapper__username-input">
        <h2>{formatMessage(messages.signupPage_usernameTitle)}</h2>
        <InputComponent type="text" name="username" inputsize="small" placeholder={formatMessage(messages.signupPage_usernameInput)} />
      </div>
      <div className="signup-page__wrapper__age-input">
        <h2>{formatMessage(messages.signupPage_ageTitle)}</h2>
        <InputComponent type="text" name="age" inputsize="small" placeholder={formatMessage(messages.signupPage_ageInput)} />
      </div>
      <div className="signup-page__wrapper__password-input">
        <h2>{formatMessage(messages.signupPage_passwordTitle)}</h2>
        <InputComponent type="password" name="password" inputsize="small" placeholder={formatMessage(messages.signupPage_passwordInput)} />
      </div>
      <div className="signup-page__wrapper__signup-button">
        <ButtonComponent type="submit" designType="full">
          {formatMessage(messages.signupPage_submitSignUp)}
        </ButtonComponent>
      </div>
    </form>
  </div>
);
