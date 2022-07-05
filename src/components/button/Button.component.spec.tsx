import { render, screen } from '@testing-library/react';
import { ButtonComponent } from './Button.component';

// ToDo: Improve Style Test

test('Should be an empty design button', () => {
  render(<ButtonComponent type="submit" designType="empty"> Empty </ButtonComponent>);
  expect(screen.getByRole('button')).toBeVisible();
});
