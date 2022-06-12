import { useIntl } from 'react-intl';
import { SettingsPageComponent } from './SettingsPage.component';

export const SettingsPageContainer = () => {
  const { formatMessage } = useIntl();

  return (
    <SettingsPageComponent formatMessage={formatMessage} />
  );
};
