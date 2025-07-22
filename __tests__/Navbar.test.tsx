import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders nav links', () => {
  render(<Navbar />);
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});
