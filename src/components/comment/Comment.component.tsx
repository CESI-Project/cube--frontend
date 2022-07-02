import React, { FC } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { ButtonComponent } from '../button/Button.component';
import { Comment } from '../../models/Comment';
import './Comment.component.scss';
import { SubComment } from '../../models/SubComment';
import { useUserById } from '../../hooks/reactQuery/useUserById';
import { User } from '../../models/User';

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

export type TypeUser = 'self' | 'other';

interface CommentComponentProps {
  comment: Comment | SubComment;
  typeUser: TypeUser;
  formatDate: string;
  subComment: boolean;
  onSubComment: () => void;
}

export const CommentComponent: FC<CommentComponentProps> = ({
  comment, typeUser, formatDate, subComment, onSubComment,
}) => {
  let commentClassName = 'comment';

  if (typeUser === 'self') {
    commentClassName += '__self';
  }
  if (typeUser === 'other') {
    commentClassName += '__other';
  }

  const { formatMessage } = useIntl();
  // @ts-ignore
  const { user }: User = useUserById(comment.userId);

  return (
    <div key={comment.id}>
      {typeUser === 'self' && (
      <div className={commentClassName}>
        {!subComment && (
          <ButtonComponent type="button" designType="empty" onClick={() => { onSubComment(); }}>
            {formatMessage(messages.comment_buttonAnswer)}
          </ButtonComponent>
        )}
        <ButtonComponent type="button" designType="empty">
          {formatMessage(messages.comment_buttonDelete)}
        </ButtonComponent>
        <div className={`${commentClassName}__text`}>
          {comment.text}
        </div>
        <div className={`${commentClassName}__side`}>
          { user.userName }
          <div className={`${commentClassName}__side__created-at`}>
            { formatDate }
          </div>
        </div>
      </div>
      )}
      {typeUser === 'other' && (
      <div className={commentClassName}>
        <div className={`${commentClassName}__side`}>
          { user.userName }
          <div className={`${commentClassName}__side__created-at`}>
            { formatDate }
          </div>
        </div>
        <div className={`${commentClassName}__text`}>
          {comment.text}
        </div>
        {!subComment && (
          <ButtonComponent type="button" designType="empty">
            {formatMessage(messages.comment_buttonAnswer)}
          </ButtonComponent>
        )}
      </div>
      )}
    </div>
  );
};
