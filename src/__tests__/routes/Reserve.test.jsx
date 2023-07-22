import Reserve from '../../routes/Reserve';
import mockVideogames from '../../__mocks__/mockVideogames';
import renderWithProviders from '../test-utils';

describe('Reserve', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<Reserve />, {
      preloadedState: {
        videogames: {
          all: mockVideogames,
        },
      },
    });
    expect(container).toMatchSnapshot();
  });
});
