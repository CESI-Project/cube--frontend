import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { TopicPageComponent } from './TopicPage.component';
import { Topic } from '../../models/Topic';
import { useTopicById } from '../../hooks/reactQuery/useTopicById';
import { useCreateComment } from '../../hooks/reactQuery/useCreateComment';
import { useAllComments } from '../../hooks/reactQuery/useAllComments';
import { useAddFavorite } from '../../hooks/reactQuery/useAddFavorite';
import { useUserContext } from '../../context/user.context';
import { Comment } from '../../models/Comment';
// import { useIsFavorite } from '../../hooks/reactQuery/useIsFavorite';

export const TopicPageContainer = () => {
  const { id } = useParams();
  const { currentUser } = useUserContext();
  // @ts-ignore
  const { topic }:Topic = useTopicById({ topicId: parseInt(id, 10), userId: currentUser?.id });
  // @ts-ignore
  const { comments, refetch } = useAllComments(parseInt(id, 10));
  const [isComment, setIsComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { mutate: mutateComment } = useCreateComment();
  const { mutate: mutateFavorite } = useAddFavorite();

  // const { isFavorite } = useIsFavorite({
  //   id: 1,
  //   userId: currentUser?.id,
  //   topicId: parseInt(id, 10),
  // });

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
      createdAt: '2022-02-12',
    };
    mutateComment(comment);
    setIsComment(false);
    setTimeout(refetch, 500);
  };

  const onShare = () => navigator.clipboard.writeText(window.location.href);

  const onFavorite = () => { mutateFavorite({ userId: currentUser?.id, topicId: topic.id }); };

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
    />
  );
};
