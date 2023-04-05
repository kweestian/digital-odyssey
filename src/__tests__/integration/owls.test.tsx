import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Owls from '../../pages/owls/index';

describe('owls page', () => {
  it('renders without crashing', () => {
    render(<Owls />);

    // TODO change to OWLS
    const title = screen.getByText('menuTitles.chat');

    expect(title).toBeInTheDocument();
  });
});
