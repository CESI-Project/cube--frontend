import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { TopicPageComponent } from './TopicPage.component';
import { Topic } from '../../models/Topic';
import { useTopicById } from '../../hooks/reactQuery/useTopicById';
import { useCreateComment } from '../../hooks/reactQuery/useCreateComment';
import { useAllComments } from '../../hooks/reactQuery/useAllComments';
import { useUserContext } from '../../context/user.context';
import { Comment } from '../../models/Comment';

export const TopicPageContainer = () => {
  const { id } = useParams();
  // @ts-ignore
  const { topic }:Topic = useTopicById(parseInt(id, 10));
  // @ts-ignore
  const { comments, refetch } = useAllComments(parseInt(id, 10));
  const [isComment, setIsComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { currentUser } = useUserContext();
  const { mutate } = useCreateComment();

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
      react: 0,
      dislike: 0,
      createdAt: '2022-02-12',
    };
    mutate(comment);
    setIsComment(false);
    setTimeout(refetch, 500);
  };

  return (
    <TopicPageComponent
      topic={topic}
      createComment={createComment}
      onChange={onChange}
      onComment={onComment}
      comments={comments}
      isComment={isComment}
      currentUser={currentUser}
    />
  );
};
