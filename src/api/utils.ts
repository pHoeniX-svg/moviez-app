import { IMovie } from '~src/types';
import { MoviesAPi } from './axios';
import { SEARCH_URL } from './config';

export const utils = {
  /* GET MOVIES */
  fetchMovies: async (searchTerm: string, page: number): Promise<IMovie[]> => {
    const endpoint = `${SEARCH_URL}${searchTerm}&page=${page}`;
    return await (
      await MoviesAPi.get(endpoint)
    ).data;
  },
};
