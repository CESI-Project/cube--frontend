import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { useAllTopics } from '../../hooks/reactQuery/useAllTopics';
import { Topic } from '../../models/Topic';
import './HomePage.component.scss';

const messages = defineMessages({
  homePage_Topic: {
    defaultMessage: 'topic',
    id: 'homePage.Topic',
  },
});

export const HomePageComponent = () => {
  const { formatMessage } = useIntl();
  const { topics } = useAllTopics();

  const listTopics = topics.map((topic: Topic) => (
    <Link to={`/${formatMessage(messages.homePage_Topic)}/${topic.id}`} key={topic.id}>
      <button type="button" className="home-page__button-topic">
        <div className="home-page__button-topic__title">
          {topic.title}
        </div>
        <div className="home-page__button-topic__picture">
          <img src={topic.picture} alt={`Image :${topic.title}`} />
        </div>
        <div className="home-page__button-topic__react">
          {topic.react}
        </div>
        <div className="home-page__button-topic__view">
          {topic.view}
        </div>
      </button>
    </Link>
  ));

  return (
    <div className="home-page">
      {listTopics}
    </div>
  );
};
