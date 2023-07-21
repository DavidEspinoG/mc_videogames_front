import Videogame from '../../components/Videogame';
import { mockVideogame } from '../../__mocks__/mockVideogames';
import renderWithProviders from '../test-utils';

describe('Videogame', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<Videogame data={mockVideogame} />);
    expect(container).toMatchSnapshot();
  });
});
