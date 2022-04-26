import { defineMessages, useIntl } from 'react-intl';
import './SignupPage.component.scss';
import React from 'react';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { useCreationAccount } from '../../hooks/reactQuery/useCreationAccount';

const messages = defineMessages({
  signupPage_mailInput: {
    defaultMessage: 'john.doe@mail.com',
    id: 'signupPage.mailInput',
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
  signupPage_nameTitle: {
    defaultMessage: 'Your name',
    id: 'signupPage.nameTitle',
  },
  signupPage_birthDateInput: {
    defaultMessage: '1980-04-02',
    id: 'signupPage.birthDateInput',
  },
  signupPage_birthDateTitle: {
    defaultMessage: 'Your first name',
    id: 'signupPage.birthDateTitle',
  },
  signupPage_passwordInput: {
    defaultMessage: 'Your password',
    id: 'signupPage.passwordInput',
  },
  signupPage_passwordTwoInput: {
    defaultMessage: 'Your password',
    id: 'signupPage.passwordTwoInput',
  },
  signupPage_signupTitle: {
    defaultMessage: 'Sign Up',
    id: 'signupPage.signupTitle',
  },
  signupPage_mailTitle: {
    defaultMessage: 'Mail :',
    id: 'connectionPage.mailTitle',
  },
  signupPage_passwordTitle: {
    defaultMessage: 'Password :',
    id: 'signupPage.passwordTitle',
  },
  signupPage_passwordTwoTitle: {
    defaultMessage: 'Re-enter your password : ',
    id: 'signupPage.passwordTwoTitle',
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

export const SignupPageComponent = () => {
  const { formatMessage } = useIntl();
  const { mutate, isError } = useCreationAccount();

  const onCreationAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('first-name') as string;
    const name = formData.get('name') as string;
    const birthDate = formData.get('birth-date') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    mutate({
      firstName, name, birthDate, email, password,
    });
  };

  return (
    <div className="signupPage">
      <h1>{formatMessage(messages.signupPage_signupTitle)}</h1>
      <form className="signupPage__wrapper" onSubmit={onCreationAccount}>
        {isError && (
        <div className="connectionPage__error-input">
          {formatMessage(messages.signupPage_errorInput)}
        </div>
        )}
        <div className="signupPage__wrapper__mail-input">
          <h2>{formatMessage(messages.signupPage_mailTitle)}</h2>
          <InputComponent type="email" name="email" inputsize="small" placeholder={formatMessage(messages.signupPage_mailInput)} />
        </div>
        <div className="signupPage__wrapper__first-name-input">
          <h2>{formatMessage(messages.signupPage_firstNameTitle)}</h2>
          <InputComponent type="text" name="first-name" inputsize="small" placeholder={formatMessage(messages.signupPage_firstNameInput)} />
        </div>
        <div className="signupPage__wrapper__name-input">
          <h2>{formatMessage(messages.signupPage_nameTitle)}</h2>
          <InputComponent type="text" name="name" inputsize="small" placeholder={formatMessage(messages.signupPage_nameInput)} />
        </div>
        <div className="signupPage__wrapper__birth-date-input">
          <h2>{formatMessage(messages.signupPage_birthDateTitle)}</h2>
          <InputComponent type="text" name="birth-date" inputsize="small" placeholder={formatMessage(messages.signupPage_birthDateInput)} />
        </div>
        <div className="signupPage__wrapper__password-input">
          <h2>{formatMessage(messages.signupPage_passwordTitle)}</h2>
          <InputComponent type="password" name="password" inputsize="small" placeholder={formatMessage(messages.signupPage_passwordInput)} />
        </div>
        <div className="signupPage__wrapper__password-two-input">
          <h2>{formatMessage(messages.signupPage_passwordTwoTitle)}</h2>
          <InputComponent type="password" name="password-two" inputsize="small" placeholder={formatMessage(messages.signupPage_passwordTwoInput)} />
        </div>
        <div className="signupPage__wrapper__signup-button">
          <ButtonComponent type="submit" designType="full">
            {formatMessage(messages.signupPage_submitSignUp)}
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};
