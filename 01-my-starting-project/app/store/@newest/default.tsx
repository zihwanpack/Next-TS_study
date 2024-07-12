import { getLatestMovies } from '@/app/_lib/movies';
import MovieList from '@/app/_components/movie-list/movie-list';
import { NextPage } from 'next';
import { TMovieListProps } from '@/types';

const NewestPage: NextPage<TMovieListProps> = () => {
  const newestMovies = getLatestMovies();
  return (
    <>
      <h2>Newest Movies</h2>
      <MovieList movies={newestMovies} />
    </>
  );
};

export default NewestPage;
