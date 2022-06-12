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
  const [changeTopicTags, setChangeTopicTags] = useState<string[]>();
  const { mutate, isSuccess } = useCreateTopic();
  const { formatMessage } = useIntl();

  const tagList: any = [];

  tags.map((tag: Tag) => tagList.push({ value: tag.nameFr, label: tag.nameFr }));

  const onChangeTopicText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChangeTopicText(event.target.value);
  };

  const onChangeTopicTags = (topicTags: OnChangeValue<TagOptionType, true>) => {
    setChangeTopicTags((topicTags as TagOptionType[]).map((tag: TagOptionType) => tag.value));
  };

  const onCreateTopic = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const topicTitle = formData.get('topicTitle') as string;

    // ToDo
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
    <CreateTopicPageComponent
      onCreateTopic={onCreateTopic}
      tagList={tagList}
      onChangeTopicText={onChangeTopicText}
      onChangeTopicTags={onChangeTopicTags}
      formatMessage={formatMessage}
    />
  );
};
