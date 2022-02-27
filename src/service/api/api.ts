import { axiosInstance } from './axios-instance';

interface ResponseType {
  success: boolean;
  data: any;
}

const restAPI = (method: string, path: string, request?: any) => {
  return axiosInstance[method](path, request)
    .then(res => ({
      success: true,
      data: res.data
    }))
    .catch(error => ({
      success: false,
      data: error.response.data,
      status: error.response.status
    }));
};

export const httpGet = (url: string): Promise<ResponseType> => {
  return restAPI('get', url);
};
