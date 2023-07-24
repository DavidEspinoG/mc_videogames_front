import AddVideogame from '../../routes/AddVideogame';
import renderWithProviders from '../test-utils';

describe('AddVideogame', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<AddVideogame />);
    expect(container).toMatchSnapshot();
  });
});
