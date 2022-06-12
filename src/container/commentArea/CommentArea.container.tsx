import React, { FC } from 'react';
import { TextareaComponent } from '../../components/textarea/Textarea.component';
import { ButtonComponent } from '../../components/button/Button.component';
import './CommentArea.container.scss';

interface CommentAreaContainerProps {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onComment: () => void;
  message: string;
}

export const CommentAreaContainer: FC<CommentAreaContainerProps> = ({
  onChange,
  onComment,
  message,
}) => (
  <div className="comment-area">
    <TextareaComponent cols={150} rows={10} onChange={onChange} />
    <ButtonComponent type="button" designType="full" onClick={onComment}>
      {message}
    </ButtonComponent>
  </div>
);
