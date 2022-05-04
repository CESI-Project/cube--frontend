import './CategoriesMenu.component.scss';
import { defineMessages, useIntl } from 'react-intl';
import { useState } from 'react';
import { useAllTags } from '../../../hooks/reactQuery/useAllTags';
import { Tag } from '../../../models/Tag';
import { FamilyTag } from '../../../models/FamilyTag';
import { useAllFamilyTags } from '../../../hooks/reactQuery/useAllFamilyTags';
import { useUserContext } from '../../../context/user.context';

const messages = defineMessages(
  {
    categoriesMenu_Categories: {
      defaultMessage: 'Categories',
      id: 'categoriesMenu.Categories',
    },
  },
);

export const CategoriesMenuComponent = () => {
  const { formatMessage } = useIntl();
  const [showCategories, setShowCategories] = useState(false);
  const { familyTags } = useAllFamilyTags();
  const { tags } = useAllTags(familyTags.map((familyTag: FamilyTag) => (familyTag.id)));
  const { setCurrentTag } = useUserContext();

  const onShowCategories = () => {
    setShowCategories(!showCategories);
  };

  const listFamilyTags = familyTags.map((familyTag:FamilyTag) => {
    const listTags = tags.map((tag: Tag) => (
      <div key={tag.id}>
        { familyTag.id === tag.familyTagId && (
        <button type="button" className="categoriesMenu__family-tag__tag" onClick={() => { setCurrentTag(tag.nameFr); }}>
          { tag.nameFr }
        </button>
        )}
      </div>
    ));

    return (
      <div key={familyTag.id} className="categoriesMenu__family-tag">
        <button type="button" className="categoriesMenu__family-tag__button" onClick={() => { setCurrentTag(familyTag.nameFr); }}>
          {familyTag.nameFr}
        </button>
        <div>
          {listTags}
        </div>
      </div>
    );
  });

  return (
    <>
      <button className="categoriesButton" type="button" onClick={onShowCategories}>
        {formatMessage(messages.categoriesMenu_Categories)}
      </button>
      <div>
        {showCategories && (
          <div className="categoriesMenu">
              {listFamilyTags}
          </div>
        )}
      </div>
    </>
  );
};
