import React, { FC } from 'react';
import { CommentZoneComponent } from './CommentZone.component';
import { Comment } from '../../../models/Comment';
import { User } from '../../../models/User';

interface CommentZoneContainerProps {
    comments: Comment[];
    currentUser: User | undefined;
}

export const CommentZoneContainer: FC<CommentZoneContainerProps> = (
  {
    comments, currentUser,
  },
) => (
  <CommentZoneComponent
    comments={comments}
    currentUser={currentUser}
  />
);
