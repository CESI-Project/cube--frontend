import { render, screen } from '@testing-library/react';
import { InputComponent } from './input.component';

test('Should be a search input', () => {
  render(<InputComponent type="search" placeholder="search" inputSize="small" />);
  expect(screen.getByRole('searchbox')).toBeVisible();
});
