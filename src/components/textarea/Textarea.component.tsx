import React, { FC } from 'react';
import './Textarea.component.scss';

interface CommentComponentProps {
  cols: number;
  rows: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  defaultValue?: string
}

export const TextareaComponent: FC<CommentComponentProps> = ({
  cols, rows, onChange, defaultValue,
}) => (
  <textarea cols={cols} rows={rows} onChange={onChange} defaultValue={defaultValue} />
);

TextareaComponent.defaultProps = {
  defaultValue: undefined,
};
