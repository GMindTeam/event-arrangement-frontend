import axios from 'axios';
import { METHOD, mainApiPath } from './constants';
import humps from 'humps';
import qs from 'qs';

const { GET, POST, DELETE, PUT, PATCH } = METHOD;

const mainRequestConfig = {
  baseURL: 'https://miniproject-271309.appspot.com/api/',
  timeout: 10000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}

const mainAxiosInstance = axios.create(mainRequestConfig);

const mainRequest = (url, values, method) => {
  const data = qs.stringify(values);
  console.log("mainRequest -> data", data)
  let params;
  if (method === GET) {
    params = humps.decamelizeKeys(values);
  }
  return mainAxiosInstance({ url, data, params, method });
}

const createEvent = data => mainRequest(mainApiPath.event, data, POST)

export {
  createEvent
}