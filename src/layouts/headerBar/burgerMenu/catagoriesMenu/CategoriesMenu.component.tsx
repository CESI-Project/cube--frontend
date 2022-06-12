import './CategoriesMenu.component.scss';
import { defineMessages } from 'react-intl';
import { FC, ReactNode } from 'react';

const messages = defineMessages(
  {
    categoriesMenu_categories: {
      defaultMessage: 'Categories',
      id: 'categoriesMenu.categories',
    },
  },
);

interface CategoriesMenuComponentProps {
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
  showCategories: boolean;
  onShowCategories: () => void;
  listFamilyTags: ReactNode;
}

export const CategoriesMenuComponent: FC<CategoriesMenuComponentProps> = ({
  formatMessage,
  showCategories,
  onShowCategories,
  listFamilyTags,
}) => (
  <>
    <button className="categories-button" type="button" onClick={onShowCategories}>
      {formatMessage(messages.categoriesMenu_categories)}
    </button>
    <div>
      {showCategories && (
      <div className="categories-menu">
        {listFamilyTags}
      </div>
      )}
    </div>
  </>
);
