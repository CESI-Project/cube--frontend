import { render, screen } from '@testing-library/react';
import { InputComponent } from './Input.component';

test('Should be a search input', () => {
  render(<InputComponent type="search" inputsize="small" placeholder="search" name="search-bar" />);
  expect(screen.getByRole('searchbox')).toBeVisible();
});
