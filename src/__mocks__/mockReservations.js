export const mockReservation = {
  id: 26,
  user_id: 7,
  videogame_id: 68,
  days: 11,
  total_price: '220.0',
  created_at: '2023-07-20T17:53:13.512Z',
  updated_at: '2023-07-20T17:53:13.512Z',
  videogame: {
    id: 68,
    name: 'Street Fighter',
    photo: 'https://mms.businesswire.com/media/20230122005013/en/1692292/5/p1-1.jpg',
    description:
      'Street Fighter is a 1987 arcade game developed by Capcom. It is the first competitive fighting game produced by the company and the inaugural game in the Street Fighter series.',
    price_per_day: '20.0',
    created_at: '2023-07-20T17:37:47.367Z',
    updated_at: '2023-07-20T17:37:47.367Z',
  },
};

const mockReservations = [
  mockReservation,
  {
    id: 19,
    user_id: 7,
    videogame_id: 62,
    days: 2,
    total_price: '10.0',
    created_at: '2023-07-20T17:37:47.766Z',
    updated_at: '2023-07-20T17:37:47.766Z',
    videogame: {
      id: 62,
      name: 'Tetris',
      photo:
        'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Tetris_NES_cover_art.jpg/220px-Tetris_NES_cover_art.jpg',
      description:
        'Tetris is a puzzle video game created in 1984 by Alexey Pajitnov, a Soviet software engineer.',
      price_per_day: '5.0',
      created_at: '2023-07-20T17:37:47.068Z',
      updated_at: '2023-07-20T17:37:47.068Z',
    },
  },
];

export default mockReservations;
