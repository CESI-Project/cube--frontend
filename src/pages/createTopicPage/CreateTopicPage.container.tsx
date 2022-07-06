import React, { useState } from 'react';
import { OnChangeValue } from 'react-select';
import { defineMessages, useIntl } from 'react-intl';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CreateTopicPageComponent } from './CreateTopicPage.component';
import { useAllFamilyTags } from '../../hooks/reactQuery/useAllFamilyTags';
import { useAllTags } from '../../hooks/reactQuery/useAllTags';
import { FamilyTag } from '../../models/FamilyTag';
import { useCreateTopic } from '../../hooks/reactQuery/useCreateTopic';
import { Tag } from '../../models/Tag';
import { Topic } from '../../models/Topic';
import { useUserContext } from '../../context/user.context';

const messages = defineMessages({
  createTopic_redirectLink: {
    defaultMessage: 'home',
    id: 'createTopic.redirectLink',
  },
  createTopic_connectionNotification: {
    defaultMessage: 'Please login to create a topic',
    id: 'createTopic.connectionNotification',
  },
});

export type TagOptionType = { label: string, value: string }

export const CreateTopicPageContainer = () => {
  const { currentUser } = useUserContext();
  const { formatMessage } = useIntl();
  if (currentUser === undefined) {
    toast.error(formatMessage(messages.createTopic_connectionNotification), {
      toastId: 1,
    });
    return (
      <Navigate to="/home" replace />
    );
  }

  const { familyTags } = useAllFamilyTags();
  const { tags } = useAllTags(familyTags.map((familyTag: FamilyTag) => familyTag.id));
  const [changeTopicText, setChangeTopicText] = useState<string>('');
  const [changeTopicTags, setChangeTopicTags] = useState<Tag[]>();
  const [changeTopicImage, setChangeTopicImage] = useState<any>();
  const { mutate, isSuccess } = useCreateTopic();

  const tagList: any = [];

  tags.map((tag: Tag) => tagList.push({ id: tag.id, value: tag.nameEn, label: tag.nameFr }));

  const onChangeTopicText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChangeTopicText(event.target.value);
  };

  const onChangeTopicTags = (topicTags: OnChangeValue<Tag, true>) => {
    setChangeTopicTags(topicTags.map((tag: Tag) => tag));
  };

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setChangeTopicImage(event.target.files[0]);
  };

  const onCreateTopic = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const topicTitle = formData.get('topicTitle') as string;
    const isPrivate = formData.get('isPrivate') as string;
    let topicType: string;

    if (isPrivate === 'on') {
      topicType = 'Privées';
    } else {
      topicType = 'Publiques';
    }

    const topic: Topic = {
      title: topicTitle,
      tags: changeTopicTags,
      text: changeTopicText,
      picture: changeTopicImage,
      type: topicType,
      userId: currentUser.id,
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
      onChangeImage={onChangeImage}
    />
  );
};
