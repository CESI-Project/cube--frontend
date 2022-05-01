import { FC } from 'react';
import { Comment } from '../../../models/Comment';
import './CommentZone.component.scss';
import { User } from '../../../models/User';

interface CommentZoneComponentProps {
  comments: Comment[];
  currentUser: User | undefined;
}

export const CommentZoneComponent: FC<CommentZoneComponentProps> = ({
  comments, currentUser,
}) => {
  const listComments = comments.map((comment: Comment) => (
    <div key={comment.id} className="comment-zone__comment">
      {currentUser !== undefined && (
      <div>
        {comment.userId === currentUser.id ? (
          <div className="comment-zone__comment__self">
            <div className="comment-zone__comment__self__main">
              <div className="comment-zone__comment__self__main__text">
                {comment.text}
              </div>
              <div className="comment-zone__comment__self__main__right">
                <div>
                  {comment.id}
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
                  {comment.userId}
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
      )}
    </div>
  ));

  return (
    <div className="comment-zone">
      {listComments}
    </div>
  );
};
