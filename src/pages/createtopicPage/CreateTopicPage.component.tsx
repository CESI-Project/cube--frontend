import { defineMessages } from 'react-intl';
import './CreateTopicPage.component.scss';
import Select, { OnChangeValue } from 'react-select';
import React, { FC } from 'react';
import { InputComponent } from '../../components/input/Input.component';
import { ButtonComponent } from '../../components/button/Button.component';
import { TextareaComponent } from '../../components/textarea/Textarea.component';
import { TagOptionType } from './CreateTopicPage.container';

const messages = defineMessages({
  createTopicPage_nameTitle: {
    defaultMessage: 'Name of the topic',
    id: 'createTopicPage.nameTitle',
  },
  createTopicPage_title: {
    defaultMessage: 'Create a topic',
    id: 'createTopicPage.title',
  },
  createTopicPage_tags: {
    defaultMessage: 'Tags',
    id: 'createTopicPage.tags',
  },
  createTopicPage_messageTitle: {
    defaultMessage: 'Message',
    id: 'createTopicPage.messageTitle',
  },
  createTopicPage_language: {
    defaultMessage: 'Language',
    id: 'createTopicPage.language',
  },
  createTopicPage_button: {
    defaultMessage: 'Validate',
    id: 'createTopicPage.button',
  },
  createTopicPage_select: {
    defaultMessage: 'Select...',
    id: 'createTopicPage.select',
  },
  createTopic_privateTopic: {
    defaultMessage: 'Topic is private',
    id: 'createTopic.privateTopic',
  },
});

interface CreateTopicPageComponentProps {
  onCreateTopic: (e: React.FormEvent<HTMLFormElement>) => void;
  tagList: any;
  onChangeTopicText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeTopicTags: (tags: OnChangeValue<TagOptionType, true>) => void;
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
}

export const CreateTopicPageComponent: FC<CreateTopicPageComponentProps> = ({
  onCreateTopic,
  tagList,
  onChangeTopicText,
  onChangeTopicTags,
  formatMessage,
}) => (
  <div className="create-topic-page">
    <h1 className="create-topic-page__title">{formatMessage(messages.createTopicPage_title)}</h1>
    <form className="create-topic-page__content" onSubmit={onCreateTopic}>
      <div className="create-topic-page__content__left">
        <input type="file" name="file" />
        <div className="create-topic-page__content__left__checkbox">
          <input type="checkbox" name="private" onChange={() => {}} />
          {formatMessage(messages.createTopic_privateTopic)}
        </div>
      </div>
      <div className="create-topic-page__content__right">
        <h2>{formatMessage(messages.createTopicPage_nameTitle)}</h2>
        <InputComponent type="text" name="topicTitle" inputsize="medium" placeholder={formatMessage(messages.createTopicPage_nameTitle)} />
        <h2>{formatMessage(messages.createTopicPage_tags)}</h2>
        <Select
          placeholder={formatMessage(messages.createTopicPage_select)}
          isMulti
          options={tagList}
          className="create-topic-page__content__right__selector"
          onChange={onChangeTopicTags}
        />
        <h2>{formatMessage(messages.createTopicPage_messageTitle)}</h2>
        <TextareaComponent cols={84} rows={20} onChange={onChangeTopicText} />
        <div className="create-topic-page__content__right__footer">
          <ButtonComponent type="submit" designType="full" onClick={() => {}}>
            {formatMessage(messages.createTopicPage_button)}
          </ButtonComponent>
        </div>
      </div>
    </form>
  </div>
);
