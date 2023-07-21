import Navigation from '../../components/navigation';
import renderWithProviders from '../test-utils';

describe('Navigation', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});
