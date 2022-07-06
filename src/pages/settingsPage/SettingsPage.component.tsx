import './SettingsPage.component.scss';
import React, { FC } from 'react';
import { defineMessages } from 'react-intl';
import { InputComponent } from '../../components/input/Input.component';
import { ButtonComponent } from '../../components/button/Button.component';
import { User } from '../../models/User';

const messages = defineMessages({
  settingsPage_mailInput: {
    defaultMessage: 'john.doe@mail.com',
    id: 'settingsPage.mailInput',
  },
  settingsPage_usernameInput: {
    defaultMessage: 'John33',
    id: 'settingsPage.usernameInput',
  },
  settingsPage_firstNameInput: {
    defaultMessage: 'John',
    id: 'settingsPage.firstNameInput',
  },
  settingsPage_firstNameTitle: {
    defaultMessage: 'Your first name',
    id: 'settingsPage.firstNameTitle',
  },
  settingsPage_nameInput: {
    defaultMessage: 'Doe',
    id: 'settingsPage.nameInput',
  },
  settingsPage_usernameTitle: {
    defaultMessage: 'Username',
    id: 'settingsPage.usernameTitle',
  },
  settingsPage_passwordInput: {
    defaultMessage: 'Your password',
    id: 'settingsPage.passwordInput',
  },
  settingsPage_signupTitle: {
    defaultMessage: 'Settings',
    id: 'settingsPage.signupTitle',
  },
  settingsPage_mailTitle: {
    defaultMessage: 'Mail :',
    id: 'settingsPage.mailTitle',
  },
  settingsPage_nameTitle: {
    defaultMessage: 'Your name',
    id: 'settingsPage.nameTitle',
  },
  settingsPage_passwordTitle: {
    defaultMessage: 'Password :',
    id: 'settingsPage.passwordTitle',
  },
  settingsPage_submitSignUp: {
    defaultMessage: 'Edit',
    id: 'settingsPage.submitSignUp',
  },
});

interface SettingsPageComponentProps {
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
  currentUser: User;
  onModifyProfile: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SettingsPageComponent: FC<SettingsPageComponentProps> = ({
  formatMessage,
  currentUser,
  onModifyProfile,
}) => (
  <div className="settings-page">
    <h1>{formatMessage(messages.settingsPage_signupTitle)}</h1>
    <form className="settings-page__wrapper" onSubmit={onModifyProfile}>
      <div className="settings-page__wrapper__mail-input">
        <h2>{formatMessage(messages.settingsPage_mailTitle)}</h2>
        <InputComponent type="email" name="email" inputsize="small" defaultValue={currentUser.email} />
      </div>
      <div className="settings-page__wrapper__username-input">
        <h2>{formatMessage(messages.settingsPage_usernameTitle)}</h2>
        <InputComponent type="text" name="userName" inputsize="small" defaultValue={currentUser.userName} />
      </div>
      <div className="settings-page__wrapper__password-input">
        <h2>{formatMessage(messages.settingsPage_passwordTitle)}</h2>
        <InputComponent type="password" name="password" inputsize="small" defaultValue={currentUser.password} />
      </div>
      <div className="settings-page__wrapper__signup-button">
        <ButtonComponent type="submit" designType="full">
          {formatMessage(messages.settingsPage_submitSignUp)}
        </ButtonComponent>
      </div>
    </form>
  </div>
);
