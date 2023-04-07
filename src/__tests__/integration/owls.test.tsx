import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Owls from '../../pages/game/owls';

describe('owls page', () => {
  it('renders without crashing', () => {
    render(<Owls />);
  });
});
