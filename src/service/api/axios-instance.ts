import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const axiosInstance: AxiosInstance = axios.create(config);
