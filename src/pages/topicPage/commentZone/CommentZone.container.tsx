import React, { FC } from 'react';
import { CommentZoneComponent } from './CommentZone.component';
import { Comment } from '../../../models/Comment';

interface CommentZoneContainerProps {
    comments: Comment[];
}

export const CommentZoneContainer: FC<CommentZoneContainerProps> = (
  { comments },
) => (
  <CommentZoneComponent comments={comments} />
);
