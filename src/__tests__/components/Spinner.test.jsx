import Spinner from '../../components/spinner';
import renderWithProviders from '../test-utils';

describe('Spinner', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
