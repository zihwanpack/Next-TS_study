import { fetchMovies } from '@/api';
import { useEffect, useState } from 'react';

import styles from './MovieList.module.css';
import Carousel from '../Carousel/Carousel';

const MovieList = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchMovies({ signal }).then((res) => {
      const { data } = res;
      setMovieData(data);
    });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Carousel movieData={movieData} />
    </div>
  );
};

export default MovieList;
