import { defineMessages, useIntl } from 'react-intl';
import './TopicPage.component.scss';
import React, { FC } from 'react';
import { ButtonComponent } from '../../components/button/button.component';
import { Topic } from '../../models/Topic';
import { CommentZoneContainer } from './commentZone/CommentZone.container';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { Comment } from '../../models/Comment';
import { User } from '../../models/User';

const messages = defineMessages({
  topicPage_favoritesButton: {
    defaultMessage: 'Favorite',
    id: 'topicPage.favoritesButton',
  },
  topicPage_shareButton: {
    defaultMessage: 'Share',
    id: 'topicPage.shareButton',
  },
  topicPage_commentButton: {
    defaultMessage: 'Comment',
    id: 'topicPage.commentButton',
  },
  topicPage_viewCounter: {
    defaultMessage: 'View Counter :',
    id: 'topicPage.viewCounter',
  },
});

interface TopicPageComponentProps {
  topic: Topic,
  createComment: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onComment: () => void;
  comments: Comment[];
  isComment: boolean;
  onShare: () => void;
  onFavorite: () => void;
  currentUser: User | undefined;
  refetchAllComments: () => void;
  isLiked: boolean;
}

export const TopicPageComponent: FC<TopicPageComponentProps> = ({
  topic, createComment, onChange, onComment, isComment, comments, onShare, onFavorite, currentUser, refetchAllComments, isLiked,
}) => {
  const { formatMessage } = useIntl();

  return (
    <div className="topic-page">
      <div className="topic-page__title">
        {topic.title}
      </div>
      <div className="topic-page__main">
        <img src={topic.picture} alt={topic.title} />
        <div className="topic-page__main__text">
          {topic.text}
        </div>
      </div>
      <div className="topic-page__footer">
        <div className="topic-page__footer__buttons">
          {isLiked && (
          <ButtonComponent type="button" designType="full" onClick={onFavorite}>
            {formatMessage(messages.topicPage_favoritesButton)}
          </ButtonComponent>
          )}
          {!isLiked && (
          <ButtonComponent type="button" designType="empty" onClick={onFavorite}>
            {formatMessage(messages.topicPage_favoritesButton)}
          </ButtonComponent>
          )}
          <ButtonComponent type="button" designType="empty" onClick={onShare}>
            {formatMessage(messages.topicPage_shareButton)}
          </ButtonComponent>
          <ButtonComponent type="button" designType="empty" onClick={createComment}>
            {formatMessage(messages.topicPage_commentButton)}
          </ButtonComponent>
        </div>
        <div className="topic-page__footer__view-counter">
          <div className="topic-page__view-counter">
            {formatMessage(messages.topicPage_viewCounter)}
            {topic.view}
          </div>
        </div>
      </div>
      {(isComment && currentUser !== undefined) && (
      <div className="topic-page__create-comment">
        <div>
          <TextareaComponent cols={150} rows={10} onChange={onChange} />
        </div>
        <div>
          <ButtonComponent type="button" designType="full" onClick={onComment}>
            Commenter
          </ButtonComponent>
        </div>
      </div>
      )}
      <CommentZoneContainer
        comments={comments}
        currentUser={currentUser}
        refetchAllComments={refetchAllComments}
      />
    </div>
  );
};
