import axios from 'axios';

import {auth} from "./";

class UserService {
  getUserById(userId:string) {
    const config = {
        params: {
            userId: userId
        }
    }
    return axios.get(auth.signIn, config)
  }
}

export default new UserService();