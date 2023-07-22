import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { afterEach, expect, vi } from 'vitest';

// Mock window.matchMedia to avoid testing errors. More info here:
// https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

expect.extend(matchers);

vi.mock('axios');

vi.mock('react-router-dom', async () => {
  const actualReactRouterDom = await vi.importActual('react-router-dom');

  return {
    ...actualReactRouterDom,
    useParams: vi.fn(),
  };
});

beforeEach(() => {
  axios.get.mockReset();
  axios.post.mockReset();
  axios.delete.mockReset();
  useParams.mockReset();
});

afterEach(() => {
  cleanup();
});
