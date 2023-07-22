import Login from '../../routes/Login';
import renderWithProviders from '../test-utils';

describe('Login', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<Login />);
    expect(container).toMatchSnapshot();
  });
});
