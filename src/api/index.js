import axios from 'axios';
import { METHOD, mainApiPath } from './constants';
import humps from 'humps';
import qs from 'qs';

const { GET, POST, DELETE, PUT } = METHOD;

const mainRequestConfig = {
  baseURL: 'https://backend-dot-eventarrangement-275602.uc.r.appspot.com/api/',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}

const mainAxiosInstance = axios.create(mainRequestConfig);

const mainRequest = (url, values, method) => {
  const data = qs.stringify(values);
  let params;
  if (method === GET) {
    params = humps.decamelizeKeys(values);
  }
  return mainAxiosInstance({ url, data, params, method });
}


const createEvent = data => mainRequest(mainApiPath.event, data, POST)
const createResponse = data => mainRequest(mainApiPath.response, data, POST)
const editEvent = (data, EventID) => mainRequest(mainApiPath.event+EventID, data, PUT)
const editResponse = (data, ResponseID) => mainRequest(mainApiPath.response+ResponseID, data, PUT)
const deleteResponse = (data, ResponseID) => mainRequest(mainApiPath.response+ResponseID, data, DELETE)
const getEventDetail = (EventID) => mainRequest(mainApiPath.event+EventID,'',GET)
const getOptions = (data) => mainRequest(mainApiPath.option, data, GET)


export {
  createEvent,
  createResponse,
  editEvent,
  editResponse,
  getEventDetail,
  getOptions,
  deleteResponse,
}