import React, { FC, useState } from 'react';
import { CommentZoneComponent } from './CommentZone.component';
import { Comment } from '../../../models/Comment';
import { User } from '../../../models/User';
import { deleteComment } from '../../../services/comment.service';
import { useCreateSubComment } from '../../../hooks/reactQuery/useCreateSubComment';
import { SubComment } from '../../../models/SubComment';

interface CommentZoneContainerProps {
    comments: Comment[];
    currentUser: User | undefined;
    refetchAllComments: () => void;
}

export const CommentZoneContainer: FC<CommentZoneContainerProps> = (
  {
    comments, currentUser, refetchAllComments,
  },
) => {
  const { mutate } = useCreateSubComment();
  const [subCommentText, setSubCommentText] = useState<string>('');
  const [currentComment, setCurrentComment] = useState<number>();
  const [isSubComment, setIsSubComment] = useState<boolean>(false);
  const [currentResponse, setCurrentResponse] = useState<number>();

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
      createdAt: '2022-03-16',
      commentId: currentComment,
      userId: currentUser?.id,
    };
    setIsSubComment(false);
    mutate(subComment);
  };

  return (
    <CommentZoneComponent
      comments={comments}
      currentUser={currentUser}
      onDeleteComment={onDeleteComment}
      setCurrentComment={setCurrentComment}
      onSubComment={onSubComment}
      isSubComment={isSubComment}
      setIsSubComment={setIsSubComment}
      onChange={onChange}
      currentResponse={currentResponse}
      setCurrentResponse={setCurrentResponse}
    />
  );
};
