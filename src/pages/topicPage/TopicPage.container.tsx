import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { TopicPageComponent } from './TopicPage.component';
import { Topic } from '../../models/Topic';
import { useTopicById } from '../../hooks/reactQuery/useTopicById';
import { useCreateComment } from '../../hooks/reactQuery/useCreateComment';
import { useAllComments } from '../../hooks/reactQuery/useAllComments';
import { useAddFavorite } from '../../hooks/reactQuery/useAddFavorite';
import { useUserContext } from '../../context/user.context';
import { Comment } from '../../models/Comment';
import { useViewByTopic } from '../../hooks/reactQuery/useViewByTopic';
// import { useIsFavorite } from '../../hooks/reactQuery/useIsFavorite';

export const TopicPageContainer = () => {
  const { id } = useParams();
  // @ts-ignore
  const { topic }:Topic = useTopicById(parseInt(id, 10));
  // @ts-ignore
  const { comments, refetch } = useAllComments(parseInt(id, 10));
  const [isComment, setIsComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const { mutate: mutateComment } = useCreateComment();
  const { mutate: mutateFavorite } = useAddFavorite();
  const { mutate: mutateView } = useViewByTopic();
  const { currentUser } = useUserContext();

  const createComment = () => (
    setIsComment(true)
  );

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(event.target.value);
  };

  const onComment = () => {
    const comment:Comment = {
      text: commentText,
      userId: currentUser?.id || 1,
      topicId: topic.id,
      createdAt: '2022-03-16',
    };
    mutateComment(comment);
    setIsComment(false);
    setTimeout(refetch, 500);
  };

  const onShare = () => navigator.clipboard.writeText(window.location.href);

  const onFavorite = () => {
    setIsLiked(!isLiked);
    mutateFavorite({ userId: currentUser?.id, topicId: topic.id });
  };

  const bla = { topicId: topic.id, userId: currentUser?.id };

  useEffect(() => (
    mutateView(bla)
  ), []);

  return (
    <TopicPageComponent
      topic={topic}
      createComment={createComment}
      onChange={onChange}
      onComment={onComment}
      comments={comments}
      isComment={isComment}
      currentUser={currentUser}
      onShare={onShare}
      onFavorite={onFavorite}
      refetchAllComments={refetch}
      isLiked={isLiked}
    />
  );
};
