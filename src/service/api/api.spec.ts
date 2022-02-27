import { waitFor } from '@testing-library/react';
import axios from 'axios';
import { httpGet } from './api';

jest.doMock('axios', () => {
  const mAxiosInstance = { get: jest.fn() };

  return {
    create: jest.fn(() => mAxiosInstance),
  };
});

describe('API', () => {
  test('Should get tour data', async () => {
    jest
      .spyOn(axios, 'get')
      .mockResolvedValue(() => Promise.resolve({ data: {} }));

    const actual = await httpGet('pokemon');

    await waitFor(() => {
      expect(actual.success).toEqual(true);
    });
  });
});
