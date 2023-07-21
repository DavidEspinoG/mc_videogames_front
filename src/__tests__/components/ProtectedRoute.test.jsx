import ProtectedRoute from '../../components/ProtectedRoute';
import renderWithProviders from '../test-utils';

describe('ProtectedRoute', () => {
  const isAllowed = true;

  it('should render as expected', () => {
    const { container } = renderWithProviders(
      <ProtectedRoute isAllowed={isAllowed}>Hello</ProtectedRoute>,
    );
    expect(container).toMatchSnapshot();
  });
});
