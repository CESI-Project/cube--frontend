import { render, screen } from '@testing-library/react';
import { ButtonComponent } from './button.component';

// ToDo: Improve Style Test

test('Should be an empty design button', () => {
  render(<ButtonComponent type="submit" designType="empty" onClick={() => {}}> Empty </ButtonComponent>);
  expect(screen.getByRole('button')).toBeVisible();
});

// test('Should be a full design button', () => {
//   render(<ButtonComponent type="submit" designType="full"> Full </ButtonComponent>);
//   expect(screen.getByRole('button')).toHaveStyle(`
//     width: 8.75rem;
//     height: 2.5rem;
//     border-radius: 0.8rem;
//     border: 0.3rem solid $dark-blue;
//     font-size: 1rem;
//     cursor: pointer;
//     background-color: $dark-blue;
//     color: $light-white;
//   `);
// });
