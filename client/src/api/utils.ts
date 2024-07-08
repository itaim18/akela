import axios, { AxiosResponse } from 'axios';
import { HttpRequestError } from './types';

axios.defaults.baseURL = 'http://localhost:3000/';

export const get = async <Response>(url: string, queryParams?: Record<string, string>) => {
  const { data } = await axios.get<Response>(
    `${url}${queryParams ? `?${new URLSearchParams(queryParams).toString()}` : ''}`
  );

  return data;
};

export const post = async <Body, Response>(url: string, body?: Body) => {
  const { data } = await axios.post<Response, AxiosResponse<Response>, Body>(url, body);

  return data;
};

export const put = async <Body, Response>(url: string, body?: Body) => {
  const { data } = await axios.put<Response, AxiosResponse<Response>, Body>(url, body);

  return data;
};

export const patch = async <Body, Response>(url: string, body?: Body) => {
  const { data } = await axios.patch<Response, AxiosResponse<Response>, Body>(url, body);

  return data;
};

export const deleteRequest = async <Response>(url: string) => {
  const { data } = await axios.delete<Response>(url);

  return data;
};

export const isHttpRequestError = (error: unknown): error is HttpRequestError => {
  const httpError = error as HttpRequestError;

  return httpError.response?.status !== undefined || httpError.response?.status != null;
};
