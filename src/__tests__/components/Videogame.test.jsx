import userEvent from '@testing-library/user-event';
import Videogame from '../../components/Videogame';
import mockVideogames, { mockVideogame } from '../../__mocks__/mockVideogames';
import axios from '../setup';
import renderWithProviders from '../test-utils';

describe('Videogame', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<Videogame data={mockVideogame} />);
    expect(container).toMatchSnapshot();
  });

  it('should delete videogame from store when clicking delete button', async () => {
    const { store, getByRole } = renderWithProviders(
      <Videogame data={mockVideogame} deleteButton />,
      {
        preloadedState: {
          videogames: {
            all: mockVideogames,
          },
        },
      },
    );

    axios.delete.mockResolvedValue({ status: 200, data: { message: '' } });
    expect(store.getState().videogames.all.includes(mockVideogame)).toBeTruthy();
    await userEvent.click(getByRole('button', { name: 'Delete' }));
    expect(store.getState().videogames.all.includes(mockVideogame)).toBeFalsy();
  });
});
