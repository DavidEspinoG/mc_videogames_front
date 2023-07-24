import Spinner from '../../components/spinner';
import renderWithProviders from '../test-utils';

describe('Spinner', () => {
  // This component renders an external dependency that is already unit tested in their own repo
  // https://github.com/Bayer-Group/atomic-spinner
  it('should render', () => {
    const { container } = renderWithProviders(<Spinner />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
