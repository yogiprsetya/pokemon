/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { waitFor } from '@testing-library/react';
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from './localStorage';

const TEXT = 'Text for unit testing only!';

describe('localStorage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
        removeItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it('Should call setItem', async () => {
    setLocalStorage('test_name', TEXT);

    await waitFor(() => {
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'pokeapp@test_name',
        TEXT
      );
    });
  });

  it('Should call getItem', async () => {
    getLocalStorage('test_name');

    await waitFor(() => {
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    });
  });

  it('Should call removeItem', async () => {
    removeLocalStorage('test_name');

    await waitFor(() => {
      expect(window.localStorage.removeItem).toHaveBeenCalledTimes(1);
    });
  });
});
