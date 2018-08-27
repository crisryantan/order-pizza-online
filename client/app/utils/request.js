import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8001';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

export function getRequest(url) {
  return axios.get(url);
}
