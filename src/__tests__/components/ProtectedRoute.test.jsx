import ProtectedRoute from '../../components/ProtectedRoute';
import renderWithProviders from '../test-utils';

describe('ProtectedRoute', () => {
  it('should render children when isAllowed is true', () => {
    const { getByText } = renderWithProviders(<ProtectedRoute isAllowed>Hello</ProtectedRoute>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('should not render children when isAllowed is false', () => {
    const { queryByText } = renderWithProviders(<ProtectedRoute>Hello</ProtectedRoute>);
    expect(queryByText('Hello')).not.toBeInTheDocument();
  });
});
