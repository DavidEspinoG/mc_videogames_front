import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Navigation from '../../components/navigation';
import renderWithProviders from '../test-utils';

describe('Navigation', () => {
  it("should render as expected when there's no logged in user", () => {
    const { container } = renderWithProviders(<Navigation />);
    expect(container).toMatchSnapshot();
  });

  it('should render as expected when there is a logged in user', () => {
    const { container } = renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          user: {
            name: 'user name',
          },
        },
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('should render as expected when there is a logged in admin', () => {
    const { container } = renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          user: {
            name: 'admin name',
            admin: true,
          },
        },
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('should toggle css classes when clicking the toggler button', async () => {
    const { getByTestId } = renderWithProviders(<Navigation />);
    expect(getByTestId('navbar-collapse')).toHaveClass('desktop-show');
    await userEvent.click(getByTestId('navbar-toggler-button'));
    expect(getByTestId('navbar-collapse')).toHaveClass('show');
    await userEvent.click(getByTestId('navbar-toggler-button'));
    expect(getByTestId('navbar-collapse')).toHaveClass('desktop-show');
  });

  it('should collapse the navbar when clicking any navLink (e.g. Home)', async () => {
    const { getByRole, getByTestId } = renderWithProviders(<Navigation />);
    expect(getByTestId('navbar-collapse')).toHaveClass('desktop-show');
    await userEvent.click(getByTestId('navbar-toggler-button'));
    expect(getByTestId('navbar-collapse')).toHaveClass('show');
    await userEvent.click(getByRole('link', { name: 'Home' }));
    expect(getByTestId('navbar-collapse')).toHaveClass('desktop-show');
  });

  it('should remove user from the store when clicking the logout button', async () => {
    const { store, getByRole } = renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          user: {
            name: 'user name',
          },
        },
      },
    });

    axios.delete.mockResolvedValue({ status: 200, data: {} });
    expect(store.getState().user.user).toBeTruthy();
    await userEvent.click(getByRole('button', { name: 'Log out' }));
    expect(store.getState().user.user).toBeFalsy();
  });
});
