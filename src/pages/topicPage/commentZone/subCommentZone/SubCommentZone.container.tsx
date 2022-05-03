import { FC } from 'react';
import { SubCommentZoneComponent } from './SubCommentZone.component';
import { User } from '../../../../models/User';

interface SubCommentZoneContainerProps {
  commentId: number | undefined;
  currentUser: User | undefined;
}

export const SubCommentZoneContainer: FC<SubCommentZoneContainerProps> = ({ commentId, currentUser }) => {
  const a = () => {

  };
  return (<SubCommentZoneComponent commentId={commentId} currentUser={currentUser} />);
};
