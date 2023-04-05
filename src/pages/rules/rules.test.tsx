import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rules from './index';

describe('rules page', () => {
  it('renders without crashing', () => {
    render(<Rules />);

    const title = screen.getByText('menuTitles.rules');

    expect(title).toBeInTheDocument();
  });
});
