import { FC } from 'react';
import { useIntl } from 'react-intl';
import { SubCommentZoneComponent } from './SubCommentZone.component';
import { User } from '../../../../models/User';
import { deleteSubComment } from '../../../../services/subcomment.service';
import { SubComment } from '../../../../models/SubComment';
import { TypeUser } from '../../../../components/comment/Comment.component';
import { useUserById } from '../../../../hooks/reactQuery/useUserById';

interface SubCommentZoneContainerProps {
  subComment: SubComment;
  typeUser: TypeUser;
  refetchAllSubComments: () => void;
  commentId: number | undefined;
}

export const SubCommentZoneContainer: FC<SubCommentZoneContainerProps> = ({
  subComment, typeUser, refetchAllSubComments, commentId,
}) => {
  const date = new Date(String(subComment.createdAt));
  const formatDateSubComment = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} - ${date.getHours()}:${date.getMinutes()}`;
  const { user } = useUserById(subComment.userId);
  const { formatMessage } = useIntl();

  const onDeleteSubComment = (id: number | undefined) => {
    deleteSubComment(id);
    setTimeout(refetchAllSubComments, 100);
  };

  let subCommentClassName = 'sub-comment';
  if (typeUser === 'self') {
    subCommentClassName += '__self';
  }
  if (typeUser === 'other') {
    subCommentClassName += '__other';
  }

  return (
    <SubCommentZoneComponent
      subComment={subComment}
      onDeleteSubComment={onDeleteSubComment}
      commentId={commentId}
      typeUser={typeUser}
      formatDateSubComment={formatDateSubComment}
      user={user}
      formatMessage={formatMessage}
      subCommentClassName={subCommentClassName}
    />
  );
};
