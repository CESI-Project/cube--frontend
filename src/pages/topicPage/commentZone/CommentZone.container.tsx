import React, { FC } from 'react';
import { CommentZoneComponent } from './CommentZone.component';
import { Comment } from '../../../models/Comment';
import { User } from '../../../models/User';
import { useUserById } from '../../../hooks/reactQuery/useUserById';

interface CommentZoneContainerProps {
    comments: Comment[];
    currentUser: User | undefined;
    otherUser: User;
}

export const CommentZoneContainer: FC<CommentZoneContainerProps> = (
  {
    comments, currentUser, otherUser,
  },
) => (
  <CommentZoneComponent
    comments={comments}
    currentUser={currentUser}
    otherUser={otherUser}
  />
);
