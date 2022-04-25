import { FC, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import './signupPage.component.scss';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { useConnection } from '../../hooks/reactQuery/useConnection';
import { Consumer } from '../../models/Consumer';

const messages = defineMessages({
  signupPage_mailInput: {
    defaultMessage: 'john.doe@mail.com',
    id: 'signupPage.mailInput',
  },
  signupPage_nameInput: {
    defaultMessage: 'John Doe',
    id: 'signupPage.nameInput',
  },
  signupPage_nameTitle: {
    defaultMessage: 'Name account',
    id: 'signupPage.nameTitle',
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
});

// interface signupPageComponentProps {
//   truc: Consumer
// }

export const SignupPageComponent = () => {
  const { formatMessage } = useIntl();
  // const { data, isError } = useConnection(truc.email, truc.password);

  return (
    <div className="signupPage">
      <h1>{formatMessage(messages.signupPage_signupTitle)}</h1>
      <div className="signupPage__wrapper">
        <div className="signupPage__wrapper__mail-input">
          <h2>{formatMessage(messages.signupPage_mailTitle)}</h2>
          <InputComponent type="email" inputsize="small" placeholder={formatMessage(messages.signupPage_mailInput)} />
        </div>
        <div className="signupPage__wrapper__name-input">
          <h2>{formatMessage(messages.signupPage_nameTitle)}</h2>
          <InputComponent type="text" inputsize="small" placeholder={formatMessage(messages.signupPage_nameInput)} />
        </div>
        <div className="signupPage__wrapper__password-input">
          <h2>{formatMessage(messages.signupPage_passwordTitle)}</h2>
          <InputComponent type="password" inputsize="small" placeholder={formatMessage(messages.signupPage_passwordInput)} />
        </div>
        <div className="signupPage__wrapper__password-two-input">
          <h2>{formatMessage(messages.signupPage_passwordTwoTitle)}</h2>
          <InputComponent type="password" inputsize="small" placeholder={formatMessage(messages.signupPage_passwordTwoInput)} />
        </div>
        <div className="signupPage__wrapper__signup-button">
          <ButtonComponent type="submit" designType="full">
            {formatMessage(messages.signupPage_submitSignUp)}
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
