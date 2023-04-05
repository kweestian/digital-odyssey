import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cards from './index';

describe('cards page', () => {
  it('renders without crashing', () => {
    render(<Cards />);

    const title = screen.getByText('menuTitles.cards');

    expect(title).toBeInTheDocument();
  });
});
