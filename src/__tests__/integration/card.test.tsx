import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cards from '../../pages/game/cards';

describe('cards page', () => {
  it('renders without crashing', () => {
    render(<Cards />);
  });
  it('renders cards page unchange', () => {
    const { container } = render(<Cards />);
    expect(container).toMatchSnapshot();
  });
});
