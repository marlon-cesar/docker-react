import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current app link', () => {
  render(<App />);
  const linkElement = screen.getByText(/pão 2/i);
  expect(linkElement).toBeInTheDocument();
});

