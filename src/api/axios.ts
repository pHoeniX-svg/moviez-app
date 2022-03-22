import axios from 'axios';
import { API_URL } from './config';

export const MoviesAPi = axios.create({
  baseURL: API_URL,
});
