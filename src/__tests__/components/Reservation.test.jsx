import Reservation from '../../components/Reservation';
import { mockReservation } from '../../__mocks__/mockReservations';
import renderWithProviders from '../test-utils';

describe('Reservation', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<Reservation data={mockReservation} />);
    expect(container).toMatchSnapshot();
  });
});
