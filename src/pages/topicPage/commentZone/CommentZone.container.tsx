import React, { FC } from 'react';
import { CommentZoneComponent } from './CommentZone.component';
import { Comment } from '../../../models/Comment';
import { User } from '../../../models/User';
import { deleteComment } from '../../../services/comment.service';

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
  const onDeleteComment = (id: number | undefined) => {
    deleteComment(id);
    setTimeout(refetchAllComments, 100);
  };

  return (
    <CommentZoneComponent
      comments={comments}
      currentUser={currentUser}
      onDeleteComment={onDeleteComment}
    />
  );
};
