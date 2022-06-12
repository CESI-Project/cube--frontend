import { useIntl } from 'react-intl';
import { useState } from 'react';
import { CategoriesMenuComponent } from './CategoriesMenu.component';
import { useAllFamilyTags } from '../../../../hooks/reactQuery/useAllFamilyTags';
import { useAllTags } from '../../../../hooks/reactQuery/useAllTags';
import { FamilyTag } from '../../../../models/FamilyTag';
import { useUserContext } from '../../../../context/user.context';
import { Tag } from '../../../../models/Tag';

export const CategoriesMenuContainer = () => {
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
          <button type="button" className="categories-menu__family-tag__tag-button" onClick={() => { setCurrentTag(tag.nameFr); }}>
            { tag.nameFr }
          </button>
        )}
      </div>
    ));

    return (
      <div key={familyTag.id} className="categories-menu__family-tag">
        <button type="button" className="categories-menu__family-tag__button" onClick={() => { setCurrentTag(familyTag.nameFr); }}>
          {familyTag.nameFr}
        </button>
        <div>
          {listTags}
        </div>
      </div>
    );
  });

  return (
    <CategoriesMenuComponent
      onShowCategories={onShowCategories}
      showCategories={showCategories}
      listFamilyTags={listFamilyTags}
      formatMessage={formatMessage}
    />
  );
};
