import Reservation from '../../components/Reservation';
import { mockReservation } from '../../__mocks__/mockReservations';
import renderWithProviders from '../test-utils';

describe('Reservation', () => {
  const data = mockReservation;

  it('should render as expected', () => {
    const { container } = renderWithProviders(<Reservation data={data} />);
    expect(container).toMatchSnapshot();
  });
});
