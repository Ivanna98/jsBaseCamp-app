import axios from 'axios';

axios.interceptors.request.use(
  request => {
    const token = localStorage.getItem('auth');
    // if token exist in local storage - then we set it to the headers
    if (token) {
      request.headers['Authorization'] = token;
    }
    return request;
  },
  // keep error response alive
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => response, 
  error => {
    // if response has unauthorized error, then token is invalid and we should remove it
    if (error.response.status === 401) {
      localStorage.removeItem('auth');
    }
    // keep error response alive
    return Promise.reject(error);
  }
);

export default axios;
