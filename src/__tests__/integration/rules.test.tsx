import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rules from '../../pages/game/rules';

describe('rules page', () => {
  it('renders without crashing', () => {
    render(<Rules />);
  });
  it('renders rules page unchanged', () => {
    const { container } = render(<Rules />);
    expect(container).toMatchSnapshot();
  });
});
