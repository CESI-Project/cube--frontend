import { defineMessages } from 'react-intl';
import './TopicPage.component.scss';
import React, { FC, ReactNode } from 'react';
import { ButtonComponent } from '../../components/button/Button.component';
import { Topic } from '../../models/Topic';
import { Comment } from '../../models/Comment';
import { User } from '../../models/User';
import { CommentAreaContainer } from '../../container/commentArea/CommentArea.container';

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
    defaultMessage: 'View Counter : ',
    id: 'topicPage.viewCounter',
  },
  topicPage_answerButton: {
    defaultMessage: 'Answer',
    id: 'topicPage.answerButton',
  },
});

interface TopicPageComponentProps {
  topic: Topic,
  createComment: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onComment: () => void;
  isComment: boolean;
  onShare: () => void;
  onFavorite: () => void;
  currentUser: User | undefined;
  isLiked: boolean;
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
  commentMapping: ReactNode;
}

export const TopicPageComponent: FC<TopicPageComponentProps> = ({
  topic,
  createComment,
  onChange,
  onComment,
  isComment,
  onShare,
  onFavorite,
  currentUser,
  isLiked,
  formatMessage,
  commentMapping,
}) => (
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
        {isLiked ? (
          <ButtonComponent type="button" designType="full" onClick={onFavorite}>
            {formatMessage(messages.topicPage_favoritesButton)}
          </ButtonComponent>
        ) : (
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
    <CommentAreaContainer
      onChange={onChange}
      onComment={onComment}
      message={formatMessage(messages.topicPage_answerButton)}
    />
    )}
    { commentMapping }
  </div>
);
