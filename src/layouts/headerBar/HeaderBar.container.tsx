import { useIntl } from 'react-intl';
import { HeaderBarComponent } from './HeaderBar.component';
import { useUserContext } from '../../context/user.context';

export const HeaderBarContainer = () => {
  const { formatMessage } = useIntl();
  const { isAuthenticated, currentUser, logOut } = useUserContext();

  return (
    <HeaderBarComponent
      logOut={logOut}
      isAuthenticated={isAuthenticated}
      currentUser={currentUser}
      formatMessage={formatMessage}
    />
  );
};
