import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

function fetchMovies() {
  return instance.get('/products');
}

export { fetchMovies };
