import Videogame from '../../components/Videogame';
import { mockVideogame } from '../../__mocks__/mockVideogames';
import renderWithProviders from '../test-utils';

describe('Videogame', () => {
  const data = mockVideogame;

  it('should render as expected', () => {
    const { container } = renderWithProviders(<Videogame data={data} />);
    expect(container).toMatchSnapshot();
  });
});
