import { FC } from 'react';
import { Comment } from '../../../models/Comment';
import './CommentZone.component.scss';

interface CommentZoneComponentProps {
  comments: Comment[];
}

export const CommentZoneComponent: FC<CommentZoneComponentProps> = ({ comments }) => {
  const listComments = comments.map((comment: Comment) => (
    <div key={comment.id} className="comment-zone__comment">
      {comment.user.firstName === 'Pierre' ? (
        <div className="comment-zone__comment__self">
          <div className="comment-zone__comment__self__main">
            <div className="comment-zone__comment__self__main__text">
              {comment.text}
            </div>
            <div className="comment-zone__comment__self__main__right">
              <div>
                {comment.user.firstName}
              </div>
              <div className="comment-zone__comment__self__main__right__created-at">
                {comment.createdAt}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="comment-zone__comment__other">
          <div className="comment-zone__comment__other__main">
            <div className="comment-zone__comment__other__main__left">
              <div>
                {comment.user.firstName}
              </div>
              <div className="comment-zone__comment__other__main__left__created-at">
                {comment.createdAt}
              </div>
            </div>
            <div className="comment-zone__comment__other__main__text">
              {comment.text}
            </div>
          </div>
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
