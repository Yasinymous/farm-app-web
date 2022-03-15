import axios from 'axios';

import {auth} from "./";

class AuthService {
  signIn(body: object) {
    return axios.post(auth.signIn,body)
  }
  signUp(body: object) {
    return axios.post(auth.signUp,body)
  }
  signOut(body: object) {
    return axios.post(auth.signOut,body)
  }
}

export default new AuthService();