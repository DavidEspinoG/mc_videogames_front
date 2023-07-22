import MyReservations from '../../routes/MyReservations';
import mockReservations from '../../__mocks__/mockReservations';
import renderWithProviders from '../test-utils';

describe('MyReservations', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<MyReservations />, {
      preloadedState: {
        reservations: {
          reservations: mockReservations,
        },
      },
    });
    expect(container).toMatchSnapshot();
  });
});
