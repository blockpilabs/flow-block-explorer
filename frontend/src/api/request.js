import axios from 'axios';
import router from '@/router';
import PendingHttp from '@/utils/pendingHttp';
import { handleResponse, handleError, handleRequest } from './handle-interceptors';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000
});

export const pendingHttp = new PendingHttp({ whiteList: [], service, router });

// request interceptor
service.interceptors.request.use(
  config => handleRequest(config),
  error => handleError(error)
);

// 响应拦截器
service.interceptors.response.use(
  response => handleResponse(response),
  error => handleError(error, true)
);

export default service;
