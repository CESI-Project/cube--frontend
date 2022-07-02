import { defineMessages } from 'react-intl';
import './EditTopicPage.component.scss';
import Select, { OnChangeValue } from 'react-select';
import React, { FC } from 'react';
import { InputComponent } from '../../components/input/Input.component';
import { ButtonComponent } from '../../components/button/Button.component';
import { TextareaComponent } from '../../components/textarea/Textarea.component';
import { Tag } from '../../models/Tag';
import { Topic } from '../../models/Topic';

const messages = defineMessages({
  editTopicPage_title: {
    defaultMessage: 'Edit a topic',
    id: 'editTopicPage.title',
  },
  editTopicPage_nameTitle: {
    defaultMessage: 'Name of the topic',
    id: 'editTopicPage.nameTitle',
  },
  editTopicPage_tags: {
    defaultMessage: 'Tags',
    id: 'editTopicPage.tags',
  },
  editTopicPage_messageTitle: {
    defaultMessage: 'Message',
    id: 'editTopicPage.messageTitle',
  },
  editTopicPage_language: {
    defaultMessage: 'Language',
    id: 'editTopicPage.language',
  },
  editTopicPage_button: {
    defaultMessage: 'Validate',
    id: 'editTopicPage.button',
  },
  editTopicPage_select: {
    defaultMessage: 'Select...',
    id: 'editTopicPage.select',
  },
  createTopic_privateTopic: {
    defaultMessage: 'Topic is private',
    id: 'createTopic.privateTopic',
  },
});

interface CreateEditTopicComponentProps {
  onEditTopic: (e: React.FormEvent<HTMLFormElement>) => void;
  tagList: any;
  onChangeTopicText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeTopicTags: (tags: OnChangeValue<Tag, true>) => void;
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
  topic: Topic;
}

export const EditEditTopicComponent: FC<CreateEditTopicComponentProps> = ({
  onEditTopic,
  tagList,
  onChangeTopicText,
  onChangeTopicTags,
  formatMessage,
  topic,
}) => (
  <div className="edit-topic-page">
    <h1 className="edit-topic-page__title">{formatMessage(messages.editTopicPage_title)}</h1>
    <form className="edit-topic-page__content" onSubmit={onEditTopic}>
      <div className="edit-topic-page__content__left">
        <img src={topic.picture} alt={topic.title} />
        <input type="file" name="file" />
        <div className="edit-topic-page__content__left__checkbox">
          <input type="checkbox" name="private" />
          {formatMessage(messages.createTopic_privateTopic)}
        </div>
      </div>
      <div className="edit-topic-page__content__right">
        <h2>{formatMessage(messages.editTopicPage_nameTitle)}</h2>
        <InputComponent type="text" name="topicTitle" inputsize="medium" defaultValue={topic.title} />
        <h2>{formatMessage(messages.editTopicPage_tags)}</h2>
        <Select
          placeholder={formatMessage(messages.editTopicPage_select)}
          isMulti
          options={tagList}
          className="edit-topic-page__content__right__selector"
          onChange={onChangeTopicTags}
          defaultValue={topic.tags}
        />
        <h2>{formatMessage(messages.editTopicPage_messageTitle)}</h2>
        <TextareaComponent cols={84} rows={20} onChange={onChangeTopicText} defaultValue={topic.text} />
        <div className="edit-topic-page__content__right__footer">
          <ButtonComponent type="submit" designType="full">
            {formatMessage(messages.editTopicPage_button)}
          </ButtonComponent>
        </div>
      </div>
    </form>
  </div>
);
