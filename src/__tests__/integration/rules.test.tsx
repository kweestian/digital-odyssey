import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rules from '../../pages/game/rules';

describe('rules page', () => {
  it('renders without crashing', () => {
    render(<Rules />);
    const titleFirstCard = screen.getByText('rules:cards.card1.title');
    const titleSecondCard = screen.getByText('rules:cards.card2.title');
    const titleThirdCard = screen.getByText('rules:cards.card3.title');
    const titleFourthCard = screen.getByText('rules:cards.card4.title');

    const descriptionFirstCard = screen.getByText('rules:cards.card1.description');
    const descriptionSecondCard = screen.getByText('rules:cards.card2.description');
    const descriptionThirdCard = screen.getByText('rules:cards.card3.description');
    const descriptionFourthCard = screen.getByText('rules:cards.card4.description');

    expect(titleFirstCard).toBeInTheDocument();
    expect(titleSecondCard).toBeInTheDocument();
    expect(titleThirdCard).toBeInTheDocument();
    expect(titleFourthCard).toBeInTheDocument();

    expect(descriptionFirstCard).toBeInTheDocument();
    expect(descriptionSecondCard).toBeInTheDocument();
    expect(descriptionThirdCard).toBeInTheDocument();
    expect(descriptionFourthCard).toBeInTheDocument();
  });
  it('renders rules page unchanged', () => {
    const { container } = render(<Rules />);
    expect(container).toMatchSnapshot();
  });
});
