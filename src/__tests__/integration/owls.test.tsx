import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Owls from '../../pages/game/owls';

describe('owls page', () => {
  it('renders without crashing', () => {
    render(<Owls />);

    const image = screen.getAllByAltText('Basic Owl');
    expect(image.length).toBe(1);
  });
  it('renders owls page unchanged', () => {
    const { container } = render(<Owls />);
    expect(container).toMatchSnapshot();
  });
});
