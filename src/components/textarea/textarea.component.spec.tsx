import { render, screen } from '@testing-library/react';
import { TextareaComponent } from './textarea.component';

test('Should be a textarea', () => {
  render(<TextareaComponent cols={10} rows={10} onChange={() => {}} />);
  expect(screen.getByRole('textbox')).toBeVisible();
});
