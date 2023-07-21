import { vitest } from 'vitest';
import Carousel from '../../components/Carousel';
import mockVideogames from '../../__mocks__/mockVideogames';
import renderWithProviders from '../test-utils';

describe('Carousel', () => {
  const items = mockVideogames;
  const setPage = vitest.fn();
  const disabledLeft = false;
  const disabledRight = false;
  const deleteButton = true;

  it('should render as expected', () => {
    const { container } = renderWithProviders(
      <Carousel
        items={items}
        setPage={setPage}
        disabledLeft={disabledLeft}
        disabledRight={disabledRight}
        deleteButton={deleteButton}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
