import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import axios from 'axios';
import { afterEach, expect, vi } from 'vitest';

expect.extend(matchers);

vi.mock('axios');

beforeEach(() => {
  axios.get.mockReset();
  axios.post.mockReset();
  axios.delete.mockReset();
});

afterEach(() => {
  cleanup();
});

export default axios;
