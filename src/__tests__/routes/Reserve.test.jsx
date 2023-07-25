import { vi } from 'vitest';
import Reserve from '../../routes/Reserve';
import mockVideogames from '../../__mocks__/mockVideogames';
import renderWithProviders from '../test-utils';

describe('Reserve', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render as expected', () => {
    const date = new Date('2023/07/26');
    vi.setSystemTime(date);

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
