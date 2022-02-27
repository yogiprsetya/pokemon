import { waitFor } from '@testing-library/react';
import axios from 'axios';
import { httpGet } from './api';

jest.doMock('axios', () => {
  const mAxiosInstance = { get: jest.fn() };

  return {
    create: jest.fn(() => mAxiosInstance)
  };
});

describe('API', () => {
  test('Should get tour data', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue(() => Promise.resolve({ data: {} }));

    const actual = await httpGet('vrcontents/5f61d9ba05c4f5bc92908273');

    await waitFor(() => {
      expect(actual.success).toEqual(true);
    });
  });

  test('Should return error object', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue(() => Promise.resolve({ data: {} }));

    const actual = await httpGet('vrcontents/wrong_tour_id');

    await waitFor(() => {
      expect(actual.success).toEqual(false);
    });
  });
});
