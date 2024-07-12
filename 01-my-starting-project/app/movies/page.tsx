import React from 'react';

import { DUMMY_MOVIES } from '@/constants/dummy-movie';
import { TMovieData } from '@/types';

import MovieList from '../_components/movie-list/movie-list';
const MoviesPage: React.FC<TMovieData> = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <MovieList movies={DUMMY_MOVIES} />
    </div>
  );
};

export default MoviesPage;
