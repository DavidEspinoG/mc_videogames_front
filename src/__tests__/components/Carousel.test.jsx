import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Carousel from '../../components/Carousel';
import mockReservations from '../../__mocks__/mockReservations';
import mockVideogames from '../../__mocks__/mockVideogames';
import renderWithProviders from '../test-utils';

describe('Carousel', () => {
  const setPage = vi.fn();
  const disabledLeft = false;
  const disabledRight = false;
  const deleteButton = true;

  it('should render as expected if items are reservations', () => {
    const { container } = renderWithProviders(
      <Carousel
        items={mockReservations}
        setPage={setPage}
        disabledLeft={disabledLeft}
        disabledRight={disabledRight}
        deleteButton={deleteButton}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render as expected if items are videogames', () => {
    const { container } = renderWithProviders(
      <Carousel
        items={mockVideogames}
        setPage={setPage}
        disabledLeft={disabledLeft}
        disabledRight={disabledRight}
        deleteButton={deleteButton}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should trigger setPage callback when clicking the left and right buttons', async () => {
    const { getByTestId } = renderWithProviders(
      <Carousel
        items={mockVideogames}
        setPage={setPage}
        disabledLeft={disabledLeft}
        disabledRight={disabledRight}
        deleteButton={deleteButton}
      />,
    );
    await userEvent.click(getByTestId('btn-left'));
    expect(setPage).toHaveBeenCalledTimes(1);
    await userEvent.click(getByTestId('btn-right'));
    expect(setPage).toHaveBeenCalledTimes(2);
  });
});
