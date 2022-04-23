import { defineMessages, useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import './TopicPage.component.scss';
import { ButtonComponent } from '../../components/button/button.component';
import { useTopicById } from '../../hooks/reactQuery/useTopicById';
import { Topic } from '../../models/Topic';

const messages = defineMessages({
  topicPage_likeButton: {
    defaultMessage: 'Like',
    id: 'topicPage.likeButton',
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

export const TopicPageComponent = () => {
  const { formatMessage } = useIntl();
  const { id } = useParams();
  // @ts-ignore
  const { topic }:Topic = useTopicById(parseInt(id, 10));

  console.log(topic);

  return (
    <div className="topic-page">
      <div className="topic-page__title">
        {topic.title}
      </div>
      <div className="topic-page__main">
        <img src={topic.picture} alt={`Image :${topic.title}`} />
        <div className="topic-page__main__text">
          blabla
        </div>
      </div>
      <div className="topic-page__footer">
        <div className="topic-page__footer__buttons">
          <ButtonComponent type="button" designType="empty">
            {formatMessage(messages.topicPage_likeButton)}
          </ButtonComponent>
          <ButtonComponent type="button" designType="empty">
            {formatMessage(messages.topicPage_shareButton)}
          </ButtonComponent>
          <ButtonComponent type="button" designType="empty">
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
    </div>
  );
};
