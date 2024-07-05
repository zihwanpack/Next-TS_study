import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

function fetchMovies() {
  return instance.get('/products');
}

function fetchMovieId(productId) {
  return instance.get(`/products/${productId}`);
}

export { fetchMovies, fetchMovieId };
