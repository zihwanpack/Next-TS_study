import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

function fetchMovies(signal: AbortSignal) {
  // signal은 객체로 묶어서 전달하셈
  return instance.get('/products', { signal });
}

function fetchMovieId(productId: string | string[] | undefined) {
  return instance.get(`/products/${productId}`);
}

export { fetchMovies, fetchMovieId };
