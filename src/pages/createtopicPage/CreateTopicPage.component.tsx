import { defineMessages, useIntl } from 'react-intl';
import './CreateTopicPage.component.scss';
import Select, { OnChangeValue, OptionsOrGroups } from 'react-select';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { useAllTags } from '../../hooks/reactQuery/useAllTags';
import { useAllFamilyTags } from '../../hooks/reactQuery/useAllFamilyTags';
import { FamilyTag } from '../../models/FamilyTag';
import { Tag } from '../../models/Tag';
import { User } from '../../models/User';
import { Topic } from '../../models/Topic';
import { useCreateTopic } from '../../hooks/reactQuery/useCreateTopic';

const messages = defineMessages({
  createtopicPage_createtopicNameTitle: {
    defaultMessage: 'Name of the topic',
    id: 'createtopicPage.createtopicNameTitle',
  },
  createtopicPage_createtopicTitle: {
    defaultMessage: 'Create a topic',
    id: 'createtopicPage.createtopicTitle',
  },
  createtopicPage_createtopicTags: {
    defaultMessage: 'Tags',
    id: 'createtopicPage.createtopicTags',
  },
  createtopicPage_createtopicMessageTitle: {
    defaultMessage: 'Message',
    id: 'createtopicPage.createtopicMessageTitle',
  },
  createtopicPage_createtopicLanguage: {
    defaultMessage: 'Language',
    id: 'createtopicPage.createtopicLanguage',
  },
  createtopicPage_createtopicButton: {
    defaultMessage: 'Validate',
    id: 'createtopicPage.createtopicButton',
  },
  createtopicPage_createtopicSelect: {
    defaultMessage: 'Select...',
    id: 'createtopicPage.createtopicSelect',
  },
  createTopic_redirectLink: {
    defaultMessage: 'home',
    id: 'createTopic.redirectLink',
  },
  createTopic_privateTopic: {
    defaultMessage: 'Topic is private',
    id: 'createTopic.privateTopic',
  },
});

export const CreateTopicPageComponent = () => {
  const { formatMessage } = useIntl();
  const { familyTags } = useAllFamilyTags();
  const { tags } = useAllTags(familyTags.map((familyTag: FamilyTag) => familyTag.id));
  const [changeTopicText, setChangeTopicText] = useState<string>('');
  const [changeTopicTags, setChangeTopicTags] = useState<string[]>();
  const { mutate, isSuccess } = useCreateTopic();

  type TagOptionType = { label: string, value: string }

  const tagList: any = [];

  tags.map((tag: Tag) => tagList.push({ value: tag.nameFr, label: tag.nameFr }));

  const onChangeTopicText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChangeTopicText(event.target.value);
  };

  const onChangeTopicTags = (tags: OnChangeValue<TagOptionType, true>) => {
    setChangeTopicTags((tags as TagOptionType[]).map((tag: TagOptionType) => tag.value));
  };

  const onCreateTopic = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const topicTitle = formData.get('topicTitle') as string;

    const topic: Topic = {
      title: topicTitle,
      tags: {
        id: 2,
        nameFr: 'Enfance',
        nameEn: 'Childhood',
        familyTagId: 1,
      },
      text: changeTopicText,
    };

    mutate(topic);
  };

  if (isSuccess) {
    return <Navigate to={`/${formatMessage(messages.createTopic_redirectLink)}`} replace />;
  }

  return (
    <div className="create-topic-page">
      <h1 className="create-topic-page__title">{formatMessage(messages.createtopicPage_createtopicTitle)}</h1>
      <form className="create-topic-page__content" onSubmit={onCreateTopic}>
        <div className="create-topic-page__content__left">
          <input type="file" name="file" />
          <div className="create-topic-page__content__left__checkbox">
            <input type="checkbox" name="private" onChange={() => {}} />
            {formatMessage(messages.createTopic_privateTopic)}
          </div>
        </div>
        <div className="create-topic-page__content__right">
          <h2>{formatMessage(messages.createtopicPage_createtopicNameTitle)}</h2>
          <InputComponent type="text" name="topicTitle" inputsize="medium" placeholder={formatMessage(messages.createtopicPage_createtopicNameTitle)} />
          <h2>{formatMessage(messages.createtopicPage_createtopicTags)}</h2>
          <Select
            placeholder={formatMessage(messages.createtopicPage_createtopicSelect)}
            isMulti
            options={tagList}
            className="create-topic-page__content__right__selector"
            onChange={onChangeTopicTags}
          />
          <h2>{formatMessage(messages.createtopicPage_createtopicMessageTitle)}</h2>
          <TextareaComponent cols={84} rows={20} onChange={onChangeTopicText} />
          <div className="create-topic-page__content__right__footer">
            <ButtonComponent type="submit" designType="full" onClick={() => {}}>
              {formatMessage(messages.createtopicPage_createtopicButton)}
            </ButtonComponent>
          </div>
        </div>
      </form>
    </div>
  );
};
