import { screen } from '@testing-library/react';
import renderWithRouter from 'tests/testUtils/renderWithRouter';
import App from '../app/App';

test('Bad links goes to 404 page', () => {
  renderWithRouter(<App />, {
    route: '/something-that-does-not-match',
  });

  expect(screen.getByText('404')).toBeInTheDocument();
});
