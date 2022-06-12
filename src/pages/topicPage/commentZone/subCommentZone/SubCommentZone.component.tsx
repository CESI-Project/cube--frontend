import React, { FC } from 'react';
import { defineMessages } from 'react-intl';
import { SubComment } from '../../../../models/SubComment';
import './SubCommentZone.component.scss';
import { User } from '../../../../models/User';
import { ButtonComponent } from '../../../../components/button/Button.component';
import { TypeUser } from '../../../../components/comment/Comment.component';

const messages = defineMessages({
  comment_buttonAnswer: {
    defaultMessage: 'Answer',
    id: 'comment.buttonAnswer',
  },
  comment_buttonDelete: {
    defaultMessage: 'Delete',
    id: 'comment.buttonDelete',
  },
});

interface SubCommentZoneComponentProps {
  commentId: number | undefined;
  onDeleteSubComment: (id: number | undefined) => void;
  subComment: SubComment;
  typeUser: TypeUser;
  formatDateSubComment: string;
  user: User;
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
  subCommentClassName: string;
}

export const SubCommentZoneComponent: FC<SubCommentZoneComponentProps> = ({
  subComment,
  onDeleteSubComment,
  commentId,
  typeUser,
  formatDateSubComment,
  user,
  formatMessage,
  subCommentClassName,
}) => (
  <div key={subComment.id}>
    {subComment.commentId === commentId && (
    <div className="sub-comment">
      {typeUser === 'self' && (
      <div className={subCommentClassName}>
        <ButtonComponent type="button" designType="empty" onClick={() => { onDeleteSubComment(subComment.id); }}>
          {formatMessage(messages.comment_buttonDelete)}
        </ButtonComponent>
        <div className={`${subCommentClassName}__text`}>
          {subComment.text}
        </div>
        <div className={`${subCommentClassName}__side`}>
          { user.userName }
          <div className={`${subCommentClassName}__side__created-at`}>
            { formatDateSubComment }
          </div>
        </div>
      </div>
      )}
      {typeUser === 'other' && (
      <div className={subCommentClassName}>
        <div className={`${subCommentClassName}__side`}>
          { user.userName }
          <div className={`${subCommentClassName}__side__created-at`}>
            { formatDateSubComment }
          </div>
        </div>
        <div className={`${subCommentClassName}__text`}>
          {subComment.text}
        </div>
      </div>
      )}
    </div>

    )}
  </div>
);
