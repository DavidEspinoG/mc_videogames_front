import axios from 'axios';
import { useParams } from 'react-router-dom';
import Details from '../../routes/Details';
import { mockVideogame } from '../../__mocks__/mockVideogames';
import renderWithProviders from '../test-utils';

describe('Details', () => {
  it('should render as expected', () => {
    useParams.mockReturnValue({ id: '1' });
    const { container } = renderWithProviders(<Details />, {
      preloadedState: {
        videogames: {
          details: mockVideogame,
        },
      },
    });

    axios.get.mockResolvedValue({ status: 200, data: mockVideogame });
    expect(container).toMatchSnapshot();
  });
});
