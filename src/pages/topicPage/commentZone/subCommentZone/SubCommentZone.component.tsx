import { FC, useState } from 'react';
import { useSubCommentsByComment } from '../../../../hooks/reactQuery/useSubCommentsByComment';
import { SubComment } from '../../../../models/SubComment';
import './SubCommentZone.component.scss';
import { User } from '../../../../models/User';

interface SubCommentZoneComponentProps {
  commentId: number | undefined;
  currentUser: User | undefined;
}

export const SubCommentZoneComponent: FC<SubCommentZoneComponentProps> = ({ commentId, currentUser }) => {
  const { subComments, refetch } = useSubCommentsByComment(commentId);
  const [showComment, isShowComment] = useState<boolean>(false);

  const onShowComment = () => {
    refetch();
    isShowComment(!showComment);
  };

  const listSubComment = subComments.map((subComment: SubComment) => (
    <div key={subComment.id}>
      {subComment.commentId === commentId && (
      <div className="sub-comment__content">
        {subComment.userId === currentUser?.id ? (
          <div className="sub-comment__content__self">
            <div>
              {subComment.userId}
            </div>
            <div className="sub-comment__content__self__text">
              {subComment.text}
            </div>
          </div>

        ) : (
          <div className="sub-comment__content__other">
            <div>
              {subComment.userId}
            </div>
            <div className="sub-comment__content__other__text">
              {subComment.text}
            </div>
          </div>
        )}
      </div>

      )}
    </div>
  ));

  return (
    <div className="sub-comment">
      <hr />
      <button className="sub-comment__button" type="button" onClick={onShowComment}>
        &#10225;
      </button>
      {showComment && (
      <div>
        { listSubComment }
      </div>
      )}
    </div>
  );
};
