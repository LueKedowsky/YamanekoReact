import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from 'pages/SignIn/SignIn';

test('Check to empty fields render error on submit', () => {
  render(<SignIn />);

  userEvent.click(screen.getByRole('button', { name: /авторизация/i }));
  const emptyFieldError = screen.queryAllByText(/🠕 заполните поле выше 🠕/i);
  expect(emptyFieldError).not.toBeNull();
});
