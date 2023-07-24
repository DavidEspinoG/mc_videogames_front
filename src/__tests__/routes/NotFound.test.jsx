import NotFound from '../../routes/NotFound';
import renderWithProviders from '../test-utils';

describe('NotFound', () => {
  it('should render as expected', () => {
    const { container, unmount } = renderWithProviders(<NotFound />);
    expect(container).toMatchSnapshot();
    unmount();
  });
});
