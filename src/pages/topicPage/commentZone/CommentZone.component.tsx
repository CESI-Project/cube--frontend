import React, { FC } from 'react';
import { Comment } from '../../../models/Comment';
import './CommentZone.component.scss';
import { User } from '../../../models/User';
import { ButtonComponent } from '../../../components/button/button.component';
import { SubCommentZoneContainer } from './subCommentZone/SubCommentZone.container';
import { TextareaComponent } from '../../../components/textarea/textarea.component';

interface CommentZoneComponentProps {
  comments: Comment[];
  currentUser: User | undefined;
  onDeleteComment: (id: number | undefined) => void;
  setCurrentComment: (prevState: number | undefined) => void;
  onSubComment: () => void;
  isSubComment: boolean;
  setIsSubComment: (prevState: boolean) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  currentResponse: number | undefined;
  setCurrentResponse: (prevState: number | undefined) => void;
}

export const CommentZoneComponent: FC<CommentZoneComponentProps> = ({
  comments,
  currentUser,
  onDeleteComment,
  onSubComment,
  isSubComment,
  setIsSubComment,
  onChange,
  setCurrentComment,
  setCurrentResponse,
  currentResponse,
}) => {
  const onSubCommentWrapper = (commentId: number | undefined) => {
    setCurrentResponse(commentId);
    setCurrentComment(commentId);
    setIsSubComment(!isSubComment);
  };
  const listComments = comments.map((comment: Comment) => (
    <div key={comment.id} className="comment-zone__comment">
      {currentUser !== undefined && (
      <div>
        {comment.userId === currentUser.id ? (
          <div className="comment-zone__comment__self">
            <div className="comment-zone__comment__self__main">
              <ButtonComponent type="button" designType="empty" onClick={() => { onSubCommentWrapper(comment.id); }}>
                Repondre
              </ButtonComponent>
              <ButtonComponent type="button" designType="empty" onClick={() => { onDeleteComment(comment.id); }}>
                Delete
              </ButtonComponent>
              <div className="comment-zone__comment__self__main__text">
                {comment.text}
              </div>
              <div className="comment-zone__comment__self__main__right">
                { comment.userId === 1 && (
                <div>
                  JeanPierre
                </div>
                )}
                { comment.userId === 2 && (
                <div>
                  HenryLocal
                </div>
                )}
                { comment.userId === 3 && (
                <div>
                  Superman
                </div>
                )}
                { comment.userId === 4 && (
                <div>
                  testman
                </div>
                )}
                <div className="comment-zone__comment__self__main__right__created-at">
                  {comment.createdAt}
                </div>
              </div>
            </div>
            <SubCommentZoneContainer commentId={comment.id} currentUser={currentUser} />
            {(isSubComment && currentResponse === comment.id) && (
            <div className="topic-page__create-comment">
              <div>
                <TextareaComponent cols={150} rows={10} onChange={onChange} />
              </div>
              <div>
                <ButtonComponent type="button" designType="full" onClick={() => { onSubComment(); }}>
                  Commenter
                </ButtonComponent>
              </div>
            </div>
            )}
          </div>
        ) : (
          <div className="comment-zone__comment__other">
            <div className="comment-zone__comment__other__main">
              <div className="comment-zone__comment__other__main__left">
                { comment.userId === 1 && (
                <div>
                  JeanPierre
                </div>
                )}
                { comment.userId === 2 && (
                <div>
                  HenryLocal
                </div>
                )}
                { comment.userId === 3 && (
                <div>
                  Superman
                </div>
                )}
                { comment.userId === 4 && (
                <div>
                  testman
                </div>
                )}
                <div className="comment-zone__comment__other__main__left__created-at">
                  {comment.createdAt}
                </div>
              </div>
              <div className="comment-zone__comment__other__main__text">
                {comment.text}
              </div>
              <ButtonComponent type="button" designType="empty" onClick={() => { onSubCommentWrapper(comment.id); }}>
                Repondre
              </ButtonComponent>
              <ButtonComponent type="button" designType="empty" onClick={() => { onDeleteComment(comment.id); }}>
                Delete
              </ButtonComponent>
            </div>
            <SubCommentZoneContainer commentId={comment.id} currentUser={currentUser} />
            {(isSubComment && currentResponse === comment.id) && (
            <div className="topic-page__create-comment">
              <div>
                <TextareaComponent cols={150} rows={10} onChange={onChange} />
              </div>
              <div>
                <ButtonComponent type="button" designType="full" onClick={() => { onSubComment(); }}>
                  Commenter
                </ButtonComponent>
              </div>
            </div>
            )}
          </div>
        )}
      </div>
      )}
    </div>
  ));

  return (
    <div className="comment-zone">
      {listComments}
    </div>
  );
};
