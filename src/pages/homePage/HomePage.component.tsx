import { useAllTopics } from '../../hooks/reactQuery/useAllTopics';
import { Topic } from '../../models/Topic';
import './HomePage.component.scss';

export const HomePageComponent = () => {
  const { topics } = useAllTopics();

  const listTopics = topics.map((topic: Topic) => (
    <button type="button" key={topic.id} className="home-page__button-topic">
      <div className="home-page__button-topic__title">
        {topic.title}
      </div>
      <div className="home-page__button-topic__picture">
        {topic.picture}
      </div>
      <div className="home-page__button-topic__react">
        {topic.react}
      </div>
      <div className="home-page__button-topic__view">
        {topic.view}
      </div>
      <div className="home-page__button-topic__comment">
        {topic.comment}
      </div>
    </button>
  ));

  return (
    <div className="home-page">
      {listTopics}
    </div>
  );
};
