import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cards from '../../pages/cards/index';

describe('cards page', () => {
  it('renders without crashing', () => {
    render(<Cards />);
    const title = screen.getByText('menuTitles.cards');

    expect(title).toBeInTheDocument();
  });
  it('renders cards page unchange', () => {
    const { container } = render(<Cards />);
    expect(container).toMatchSnapshot();
  });
});
