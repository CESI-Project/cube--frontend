import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import './TopNavigationBar.component.scss';
import { CategoriesMenuContainer } from './catagoriesMenu/CategoriesMenu.container';
import { useState } from 'react';
import { InputComponent } from '../../components/input/input.component';

const messages = defineMessages(
  {
    topNavBar_Home: {
      defaultMessage: 'Home',
      id: 'topNavBar.Home',
    },
    topNavBar_Favorites: {
      defaultMessage: 'Favorites',
      id: 'topNavBar.Favorites',
    },
    topNavBar_CreateTopic: {
      defaultMessage: 'Create topic',
      id: 'topNavBar.CreateTopic',
    },
    topNavBar_Settings: {
      defaultMessage: 'Settings',
      id: 'topNavBar.Settings',
    },
    topNavBar_searchBar: {
      defaultMessage: 'Search',
      id: 'topNavBar.searchBar',
    },
  },
);

export const TopNavigationBarComponent = () => {
  const { formatMessage } = useIntl();
  const [isLabel, setIsLabel] = useState(false);
  const onLabel = () => { setIsLabel(!isLabel); };
  return (
    <nav className="topNavBar">
      <div className="topNavBarResponsive">
        <button type="button" className="buttonResponsive" onClick={onLabel}>
          ☰
        </button>
        {isLabel && (
          <div className="divNavBarResponsive">
            <ul>
              <li>
                <Link to={formatMessage(messages.topNavBar_Home).toLowerCase()}>
                  {formatMessage(messages.topNavBar_Home)}
                </Link>
              </li>
              <li>
                  <CategoriesMenuContainer />
              </li>
              <li>
                <Link to={formatMessage(messages.topNavBar_Favorites).toLowerCase()}>
                  {formatMessage(messages.topNavBar_Favorites)}
                </Link>
              </li>
              <li>
                <Link to={formatMessage(messages.topNavBar_CreateTopic).toLowerCase()}>
                  {formatMessage(messages.topNavBar_CreateTopic)}
                </Link>
              </li>
              <li>
                <Link to={formatMessage(messages.topNavBar_Settings).toLowerCase()}>
                  {formatMessage(messages.topNavBar_Settings)}
                </Link>
              </li>
            </ul>
          </div>
        )}
        <InputComponent name="search-bar" type="search" placeholder={formatMessage(messages.topNavBar_searchBar)} inputsize="small" />
      </div>
      <div className="divNavBar">
        <div className="topNavBar__left">
          <Link to={formatMessage(messages.topNavBar_Home).toLowerCase()}>
            {formatMessage(messages.topNavBar_Home)}
          </Link>
            <CategoriesMenuContainer />
          <Link to={formatMessage(messages.topNavBar_Favorites).toLowerCase()}>
            {formatMessage(messages.topNavBar_Favorites)}
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
      </div>
    </nav>
  );
};
