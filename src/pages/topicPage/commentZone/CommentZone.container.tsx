import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import { CommentZoneComponent } from './CommentZone.component';
import { Comment } from '../../../models/Comment';
import { User } from '../../../models/User';
import { deleteComment } from '../../../services/comment.service';
import { useCreateSubComment } from '../../../hooks/reactQuery/useCreateSubComment';
import { SubComment } from '../../../models/SubComment';
import { TypeUser } from '../../../components/comment/Comment.component';
import { useUserById } from '../../../hooks/reactQuery/useUserById';
import { useSubCommentsByComment } from '../../../hooks/reactQuery/useSubCommentsByComment';
import { SubCommentZoneContainer } from './subCommentZone/SubCommentZone.container';

interface CommentZoneContainerProps {
    comment: Comment;
    typeUser: TypeUser;
    currentUser: User | undefined;
    refetchAllComments: () => void;
}

export const CommentZoneContainer: FC<CommentZoneContainerProps> = ({
  comment,
  typeUser,
  currentUser,
  refetchAllComments,
}) => {
  const { mutate } = useCreateSubComment();
  const { subComments, refetch } = useSubCommentsByComment(comment.id);
  const [subCommentText, setSubCommentText] = useState<string>('');
  const [currentComment, setCurrentComment] = useState<number>();
  const [isSubComment, setIsSubComment] = useState<boolean>(false);
  const [currentResponse, setCurrentResponse] = useState<number>();
  const { user } = useUserById(comment.userId);
  const { formatMessage } = useIntl();

  const dateNow = new Date();
  const date = new Date(String(comment.createdAt));
  const formatDateComment = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} - ${date.getHours()}:${date.getMinutes()}`;

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubCommentText(event.target.value);
  };

  const onDeleteComment = (id: number | undefined) => {
    deleteComment(id);
    setTimeout(refetchAllComments, 100);
  };

  const onSubComment = () => {
    const subComment: SubComment = {
      text: subCommentText,
      createdAt: dateNow,
      commentId: currentComment,
      userId: currentUser?.id,
    };
    mutate(subComment);
    setIsSubComment(false);
    setTimeout(refetch, 500);
  };

  let commentClassName = 'comment';
  if (typeUser === 'self') {
    commentClassName += '__self';
  }
  if (typeUser === 'other') {
    commentClassName += '__other';
  }

  const subCommentMapping = subComments.map((subComment: SubComment) => {
    if (subComment.userId === currentUser?.id) {
      return (
        <SubCommentZoneContainer
          key={subComment.id}
          subComment={subComment}
          typeUser="self"
          refetchAllSubComments={refetch}
          commentId={comment.id}
        />
      );
    }
    return (
      <SubCommentZoneContainer
        key={subComment.id}
        subComment={subComment}
        typeUser="other"
        refetchAllSubComments={refetch}
        commentId={comment.id}
      />
    );
  });

  const onSubCommentWrapper = (commentId: number | undefined) => {
    setCurrentResponse(commentId);
    setCurrentComment(commentId);
    setIsSubComment(!isSubComment);
  };

  return (
    <CommentZoneComponent
      comment={comment}
      onDeleteComment={onDeleteComment}
      onSubComment={onSubComment}
      isSubComment={isSubComment}
      onChange={onChange}
      currentResponse={currentResponse}
      typeUser={typeUser}
      formatDateComment={formatDateComment}
      user={user}
      commentClassName={commentClassName}
      onSubCommentWrapper={onSubCommentWrapper}
      subCommentMapping={subCommentMapping}
      formatMessage={formatMessage}
    />
  );
};
