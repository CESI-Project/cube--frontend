import React, { useState } from 'react';
import { OnChangeValue } from 'react-select';
import { defineMessages, useIntl } from 'react-intl';
import { Navigate } from 'react-router-dom';
import { CreateTopicPageComponent } from './CreateTopicPage.component';
import { useAllFamilyTags } from '../../hooks/reactQuery/useAllFamilyTags';
import { useAllTags } from '../../hooks/reactQuery/useAllTags';
import { FamilyTag } from '../../models/FamilyTag';
import { useCreateTopic } from '../../hooks/reactQuery/useCreateTopic';
import { Tag } from '../../models/Tag';
import { Topic } from '../../models/Topic';

const messages = defineMessages({
  createTopic_redirectLink: {
    defaultMessage: 'home',
    id: 'createTopic.redirectLink',
  },
});

export type TagOptionType = { label: string, value: string }

export const CreateTopicPageContainer = () => {
  const { familyTags } = useAllFamilyTags();
  const { tags } = useAllTags(familyTags.map((familyTag: FamilyTag) => familyTag.id));
  const [changeTopicText, setChangeTopicText] = useState<string>('');
  const [changeTopicTags, setChangeTopicTags] = useState<Tag[]>();
  const { mutate, isSuccess } = useCreateTopic();
  const { formatMessage } = useIntl();

  const tagList: any = [];

  tags.map((tag: Tag) => tagList.push({ id: tag.id, value: tag.nameEn, label: tag.nameFr }));

  const onChangeTopicText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChangeTopicText(event.target.value);
  };

  const onChangeTopicTags = (topicTags: OnChangeValue<Tag, true>) => {
    setChangeTopicTags(topicTags.map((tag: Tag) => tag));
  };

  const onCreateTopic = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const topicTitle = formData.get('topicTitle') as string;

    const topic: Topic = {
      title: topicTitle,
      tags: changeTopicTags,
      text: changeTopicText,
    };

    mutate(topic);
  };

  if (isSuccess) {
    return <Navigate to={`/${formatMessage(messages.createTopic_redirectLink)}`} replace />;
  }

  return (
    <CreateTopicPageComponent
      onCreateTopic={onCreateTopic}
      tagList={tagList}
      onChangeTopicText={onChangeTopicText}
      onChangeTopicTags={onChangeTopicTags}
      formatMessage={formatMessage}
    />
  );
};
