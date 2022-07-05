import React, { useState } from 'react';
import { OnChangeValue } from 'react-select';
import { defineMessages, useIntl } from 'react-intl';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAllFamilyTags } from '../../hooks/reactQuery/useAllFamilyTags';
import { useAllTags } from '../../hooks/reactQuery/useAllTags';
import { FamilyTag } from '../../models/FamilyTag';
import { Tag } from '../../models/Tag';
import { Topic } from '../../models/Topic';
import { useUserContext } from '../../context/user.context';
import { EditEditTopicComponent } from './EditTopicPage.component';
import { useEditTopic } from '../../hooks/reactQuery/useEditTopic';
import { useTopicById } from '../../hooks/reactQuery/useTopicById';

const messages = defineMessages({
  editTopicPage_redirectLink: {
    defaultMessage: 'home',
    id: 'editTopicPage.redirectLink',
  },
  editTopicPage_connectionNotification: {
    defaultMessage: 'Please login to create a topic',
    id: 'editTopicPage.connectionNotification',
  },
});

export const EditTopicPageContainer = () => {
  const { currentUser } = useUserContext();
  const { id } = useParams();
  // @ts-ignore
  const { topic }:Topic = useTopicById(parseInt(id, 10));
  const { formatMessage } = useIntl();
  if (currentUser === undefined) {
    toast.error(formatMessage(messages.editTopicPage_connectionNotification), {
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
  const { mutate, isSuccess } = useEditTopic();

  const tagList: any = [];

  tags.map((tag: Tag) => tagList.push({ id: tag.id, value: tag.nameEn, label: tag.nameFr }));

  const onChangeTopicText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChangeTopicText(event.target.value);
  };

  const onChangeTopicTags = (topicTags: OnChangeValue<Tag, true>) => {
    setChangeTopicTags(topicTags.map((tag: Tag) => tag));
  };

  const onEditTopic = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const topicTitle = formData.get('topicTitle') as string;

    const editTopic: Topic = {
      // @ts-ignore
      id: parseInt(id, 10),
      title: topicTitle,
      tags: changeTopicTags,
      text: changeTopicText,
    };

    mutate(editTopic);
  };

  if (isSuccess) {
    return <Navigate to={`/${formatMessage(messages.editTopicPage_redirectLink)}`} replace />;
  }

  return (
    <EditEditTopicComponent
      onEditTopic={onEditTopic}
      tagList={tagList}
      onChangeTopicText={onChangeTopicText}
      onChangeTopicTags={onChangeTopicTags}
      formatMessage={formatMessage}
      topic={topic}
    />
  );
};
