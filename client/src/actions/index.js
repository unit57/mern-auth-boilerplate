import axios from 'axios';
import { AUTH_USER } from './types';

export const signup = formProps => dispatch => {
  const response = axios.post('http://localhost:3090/signup', formProps )
};
