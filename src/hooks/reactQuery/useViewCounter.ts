import { useQuery } from 'react-query';
import { putView } from '../../services/topic.service';

export const useViewCounter = (id: number) => {
  useQuery(
    'view-counter',
    () => putView(id),
  );
};
