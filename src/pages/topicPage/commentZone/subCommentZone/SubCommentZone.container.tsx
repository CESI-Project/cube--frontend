import { FC, useState } from 'react';
import { SubCommentZoneComponent } from './SubCommentZone.component';
import { User } from '../../../../models/User';
import { deleteSubComment } from '../../../../services/subcomment.service';
import { useSubCommentsByComment } from '../../../../hooks/reactQuery/useSubCommentsByComment';

interface SubCommentZoneContainerProps {
  commentId: number | undefined;
  currentUser: User | undefined;
}


export const SubCommentZoneContainer: FC<SubCommentZoneContainerProps> = ({ commentId, currentUser }) => {
  const { subComments, refetch } = useSubCommentsByComment(commentId);
  const [showComment, isShowComment] = useState<boolean>(false);

  const onShowComment = () => {
    refetch();
    isShowComment(!showComment);
  };

  const onDeleteSubComment = (id: number | undefined) => {
    deleteSubComment(id);
    setTimeout(refetch, 100);
  };
  return (<SubCommentZoneComponent onShowComment={onShowComment} subComments={subComments} showComment={showComment} onDeleteSubComment={onDeleteSubComment} commentId={commentId} currentUser={currentUser} />);
};
