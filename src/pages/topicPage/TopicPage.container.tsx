import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { TopicPageComponent } from './TopicPage.component';
import { Topic } from '../../models/Topic';
import { useTopicById } from '../../hooks/reactQuery/useTopicById';
import { useCreateComment } from '../../hooks/reactQuery/useCreateComment';
import { useAllComments } from '../../hooks/reactQuery/useAllComments';
import { useAddFavorite } from '../../hooks/reactQuery/useAddFavorite';
import { useUserContext } from '../../context/user.context';
import { Comment } from '../../models/Comment';
import { useViewByTopic } from '../../hooks/reactQuery/useViewByTopic';
import { CommentZoneContainer } from './commentZone/CommentZone.container';

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
  const { formatMessage } = useIntl();

  const dateNow = new Date();

  const createComment = () => (
    setIsComment(!isComment)
  );

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(event.target.value);
  };

  const onComment = () => {
    const comment:Comment = {
      text: commentText,
      userId: currentUser?.id || 0,
      topicId: topic.id,
      createdAt: dateNow,
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

  // @ts-ignore
  const viewTopic = { topicId: parseInt(id, 10), userId: currentUser?.id };

  useEffect(() => (
    mutateView(viewTopic)
  ), []);

  const commentMapping = comments.map((comment: Comment) => {
    if (comment.userId === currentUser?.id) {
      return (
        <CommentZoneContainer
          key={comment.id}
          comment={comment}
          typeUser="self"
          currentUser={currentUser}
          refetchAllComments={refetch}
        />
      );
    }
    return (
      <CommentZoneContainer
        key={comment.id}
        comment={comment}
        typeUser="other"
        currentUser={currentUser}
        refetchAllComments={refetch}
      />
    );
  });

  return (
    <TopicPageComponent
      topic={topic}
      createComment={createComment}
      onChange={onChange}
      onComment={onComment}
      isComment={isComment}
      currentUser={currentUser}
      onShare={onShare}
      onFavorite={onFavorite}
      isLiked={isLiked}
      formatMessage={formatMessage}
      commentMapping={commentMapping}
    />
  );
};
