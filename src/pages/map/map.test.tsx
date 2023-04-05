import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Map from './index';

describe('map page', () => {
  it('renders without crashing', () => {
    render(<Map />);

    const title = screen.getByText('menuTitles.map');

    expect(title).toBeInTheDocument();
  });
});
