import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import './TopNavigationBar.component.scss';

const messages = defineMessages(
  {
    topNavBar_Home: {
      defaultMessage: 'Home',
      id: 'topNavBar.Home',
    },
    topNavBar_News: {
      defaultMessage: 'News',
      id: 'topNavBar.News',
    },
    topNavBar_Messages: {
      defaultMessage: 'Messages',
      id: 'topNavBar.Messages',
    },
    topNavBar_CreateTopic: {
      defaultMessage: 'Create topic',
      id: 'topNavBar.CreateTopic',
    },
    topNavBar_Settings: {
      defaultMessage: 'Settings',
      id: 'topNavBar.Settings',
    },
  },
);

export const TopNavigationBarComponent = () => {
  const { formatMessage } = useIntl();

  return (
    <nav className="topNavBar">
      <div className="topNavBar__left">
        <Link to={formatMessage(messages.topNavBar_Home).toLowerCase()}>
          {formatMessage(messages.topNavBar_Home)}
        </Link>
        <Link to={formatMessage(messages.topNavBar_News).toLowerCase()}>
          {formatMessage(messages.topNavBar_News)}
        </Link>
        <Link to={formatMessage(messages.topNavBar_Messages).toLowerCase()}>
          {formatMessage(messages.topNavBar_Messages)}
        </Link>
      </div>
      <div className="topNavBar__right">
        <Link to={formatMessage(messages.topNavBar_CreateTopic).toLowerCase()}>
          {formatMessage(messages.topNavBar_CreateTopic)}
        </Link>
        <Link to={formatMessage(messages.topNavBar_Settings).toLowerCase()}>
          {formatMessage(messages.topNavBar_Settings)}
        </Link>
      </div>
    </nav>
  );
};
