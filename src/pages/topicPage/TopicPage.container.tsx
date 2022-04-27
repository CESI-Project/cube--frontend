import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { TopicPageComponent } from './TopicPage.component';
import { Topic } from '../../models/Topic';
import { useTopicById } from '../../hooks/reactQuery/useTopicById';
import { useCreateComment } from '../../hooks/reactQuery/useCreateComment';
import { useAllComments } from '../../hooks/reactQuery/useAllComments';

export const TopicPageContainer = () => {
  const { id } = useParams();
  // @ts-ignore
  const { topic }:Topic = useTopicById(parseInt(id, 10));
  // @ts-ignore
  const { comments, refetch } = useAllComments(parseInt(id, 10));
  const [isComment, setIsComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { mutate } = useCreateComment();

  const username = {
    id: 1,
    firstName: 'Pierre',
    name: 'Rocher',
    birthDate: '2000-04-12',
    email: 'pierre.rocher@gmail.com',
    password: '1234',
  };

  const createComment = () => (
    setIsComment(true)
  );

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(event.target.value);
  };

  const onComment = () => {
    mutate({
      text: commentText, user: username, topicId: topic.id, react: 0, dislike: 0, createdAt: '2022-02-12',
    });
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
    />
  );
};
