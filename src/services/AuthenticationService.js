// services/AuthService.js
import axios from 'axios';

const API_URL = "https://immense-beyond-20928-22d260974026.herokuapp.com/api/auth"

const AuthService = {
  register: (registerRequest) => {
    return axios.post(`${API_URL}/register`, registerRequest);
  },

  authenticate: (authenticationRequest) => {
    return axios.post(`${API_URL}/authenticate`, authenticationRequest);
  },
};

export default AuthService;
