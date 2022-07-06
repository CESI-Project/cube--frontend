import { useQuery } from 'react-query';
import { getStatistics } from '../../services/user.service';

export const useStatistics = (id: number | undefined) => {
  const { data } = useQuery(
    'statistics',
    () => getStatistics(id),
    {
      enabled: !!id,
      staleTime: Infinity,
    },
  );

  const jsonData = data || [];
  const { topics } = jsonData;
  const { myTotalViews } = jsonData;
  const { totalUsers } = jsonData;
  const { totalTopics } = jsonData;
  const { totalTags } = jsonData;
  const { totalComments } = jsonData;
  const { totalResponseComments } = jsonData;
  const { totalTopicViews } = jsonData;
  const { averageCommentsByTopic } = jsonData;
  const { averageResponseCommentsByTopic } = jsonData;
  const { totalTopicsByCategories } = jsonData;

  console.log(data);

  return {
    myTopics: topics || [],
    myTotalViews: myTotalViews || [],
    totalUsers: totalUsers || [],
    totalTopics: totalTopics || [],
    totalTags: totalTags || [],
    totalComments: totalComments || [],
    totalResponseComments: totalResponseComments || [],
    averageCommentsByTopic: averageCommentsByTopic || [],
    averageResponseCommentsByTopic: averageResponseCommentsByTopic || [],
    totalTopicsByCategories: totalTopicsByCategories || [],
    totalTopicViews: totalTopicViews || [],
  };
};
