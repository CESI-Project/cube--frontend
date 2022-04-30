import { render, screen } from '@testing-library/react';
import { ButtonComponent } from './button.component';

// ToDo: Improve Style Test

test('Should be an empty design button', () => {
  render(<ButtonComponent type="submit" designType="empty" onClick={() => {}}> Empty </ButtonComponent>);
  expect(screen.getByRole('button')).toBeVisible();
});
