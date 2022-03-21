const API_URL = 'http://www.omdbapi.com';
const API_KEY: string | undefined = process.env?.REACT_APP_API_KEY;

const SEARCH_URL = `/?apikey=${API_KEY}&t=`;

const IMAGE_BASE_URL = 'http://img.omdbapi.com/';

// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  SEARCH_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
