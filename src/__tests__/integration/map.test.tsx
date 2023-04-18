import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Map from '../../pages/game/map';

describe('map page', () => {
  it('renders without crashing', () => {
    render(<Map />);
  });
  it('renders cards page unchange', () => {
    const { container } = render(<Map />);
    expect(container).toMatchSnapshot();
  });
});
