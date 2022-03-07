import axios from './axios';

export function medics(params) {
  return axios.get('/', { params });
}

export function bookAppointments(data) {
  return axios.post('/', data);
}
export function setStart(date, params) {
  return axios.put(`/${date}`, params);
}
