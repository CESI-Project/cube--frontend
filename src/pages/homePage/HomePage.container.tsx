import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { HomePageComponent } from './HomePage.component';
import { useAllTopics } from '../../hooks/reactQuery/useAllTopics';
import { useUserContext } from '../../context/user.context';
import { Topic } from '../../models/Topic';
import { Tag } from '../../models/Tag';
import { useTopicViews } from '../../hooks/reactQuery/useTopicViews';

const messages = defineMessages({
  homePage_Topic: {
    defaultMessage: 'topic',
    id: 'homePage.topic',
  },
});

export const HomePageContainer = () => {
  const { currentUser } = useUserContext();
  const { formatMessage } = useIntl();
  const { topics } = useAllTopics();
  const { currentTag } = useUserContext();
  const { topicViews } = useTopicViews(currentUser?.id);

  const listTopics = topics.map((topic: Topic) => (
    <div key={topic.id}>
      {(!currentTag && topic.isValidated && topic.type === 'Publiques') && (
        <Link to={`/${formatMessage(messages.homePage_Topic)}/${topic.id}`}>
          {topicViews.map((item: number) => item).includes(topic.id) ? (
            <button type="button" className="home-page__button-topic-exploited">
              <img src={topic.picture} alt={topic.title} />
              <p>
                {topic.title}
              </p>
            </button>
          ) : (
            <button type="button" className="home-page__button-topic">
              <img src={topic.picture} alt={topic.title} />
              <p>
                {topic.title}
              </p>
            </button>
          )}
        </Link>
      )}

      {(topic.tags?.map((tag:Tag) => tag.nameFr).includes(currentTag) && topic.isValidated && topic.type === 'Publiques') && (
        <Link to={`/${formatMessage(messages.homePage_Topic)}/${topic.id}`}>
          {topicViews.map((item: number) => item).includes(topic.id) ? (
            <button type="button" className="home-page__button-topic-exploited">
              <img src={topic.picture} alt={topic.title} />
              <p>
                {topic.title}
              </p>
            </button>
          ) : (
            <button type="button" className="home-page__button-topic">
              <img src={topic.picture} alt={topic.title} />
              <p>
                {topic.title}
              </p>
            </button>
          )}
        </Link>
      )}
    </div>
  ));

  return (
    <HomePageComponent listTopics={listTopics} />
  );
};
