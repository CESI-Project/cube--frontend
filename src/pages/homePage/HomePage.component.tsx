import './HomePage.component.scss';
import { FC, ReactNode } from 'react';

interface HomePageComponentProps {
  listTopics: ReactNode;
}

export const HomePageComponent: FC<HomePageComponentProps> = ({ listTopics }) => (
  <div className="home-page">
    {listTopics}
  </div>
);
