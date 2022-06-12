import React, { FC, ReactNode } from 'react';
import { defineMessages } from 'react-intl';
import { Comment } from '../../../models/Comment';
import './CommentZone.component.scss';
import { User } from '../../../models/User';
import { ButtonComponent } from '../../../components/button/Button.component';
import { TypeUser } from '../../../components/comment/Comment.component';
import { CommentAreaContainer } from '../../../container/commentArea/CommentArea.container';

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

interface CommentZoneComponentProps {
  comment: Comment;
  onDeleteComment: (id: number | undefined) => void;
  onSubComment: () => void;
  isSubComment: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  currentResponse: number | undefined;
  typeUser: TypeUser;
  formatDateComment: string;
  user: User;
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
  commentClassName: string;
  subCommentMapping: ReactNode;
  onSubCommentWrapper: (id: number | undefined) => void;
}

export const CommentZoneComponent: FC<CommentZoneComponentProps> = ({
  comment,
  onDeleteComment,
  onSubComment,
  isSubComment,
  onChange,
  currentResponse,
  formatDateComment,
  typeUser,
  user,
  formatMessage,
  commentClassName,
  subCommentMapping,
  onSubCommentWrapper,
}) => (
  <div key={comment.id}>
    {typeUser === 'self' && (
      <div className="comment">
        <div className={commentClassName}>
          <ButtonComponent type="button" designType="empty" onClick={() => { onSubCommentWrapper(comment.id); }}>
            {formatMessage(messages.comment_buttonAnswer)}
          </ButtonComponent>
          <ButtonComponent type="button" designType="empty" onClick={() => { onDeleteComment(comment.id); }}>
            {formatMessage(messages.comment_buttonDelete)}
          </ButtonComponent>
          <div className={`${commentClassName}__text`}>
            {comment.text}
          </div>
          <div className={`${commentClassName}__side`}>
            { user.userName }
            <div className={`${commentClassName}__side__created-at`}>
              { formatDateComment }
            </div>
          </div>
        </div>
        {(isSubComment && currentResponse === comment.id) && (
          <CommentAreaContainer
            onChange={onChange}
            onComment={onSubComment}
            message={formatMessage(messages.comment_buttonAnswer)}
          />
        )}
        { subCommentMapping }
      </div>
    )}
    {typeUser === 'other' && (
      <div className="comment">
        <div className={commentClassName}>
          <div className={`${commentClassName}__side`}>
            { user.userName }
            <div className={`${commentClassName}__side__created-at`}>
              { formatDateComment }
            </div>
          </div>
          <div className={`${commentClassName}__text`}>
            {comment.text}
          </div>
          <ButtonComponent type="button" designType="empty" onClick={() => { onSubCommentWrapper(comment.id); }}>
            {formatMessage(messages.comment_buttonAnswer)}
          </ButtonComponent>
        </div>
        {(isSubComment && currentResponse === comment.id) && (
        <CommentAreaContainer
          onChange={onChange}
          onComment={onSubComment}
          message={formatMessage(messages.comment_buttonAnswer)}
        />
        )}
        { subCommentMapping }
      </div>
    )}
  </div>
);
