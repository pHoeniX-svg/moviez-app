import axios from 'axios';
import { BASE_URL } from '~src/constants';

export const MoviesAPi = axios.create({
  baseURL: BASE_URL,
});
