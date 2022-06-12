import React, { FC } from 'react';
import './Textarea.component.scss';

interface CommentComponentProps {
  cols: number;
  rows: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextareaComponent: FC<CommentComponentProps> = ({
  cols, rows, onChange,
}) => (
  <textarea cols={cols} rows={rows} onChange={onChange} />
);
