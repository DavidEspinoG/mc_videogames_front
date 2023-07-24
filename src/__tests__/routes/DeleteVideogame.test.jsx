import DeleteVideogame from '../../routes/DeleteVideogame';
import mockVideogames from '../../__mocks__/mockVideogames';
import renderWithProviders from '../test-utils';

describe('DeleteVideogame', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<DeleteVideogame />, {
      preloadedState: {
        videogames: {
          all: mockVideogames,
        },
      },
    });
    expect(container).toMatchSnapshot();
  });
});
