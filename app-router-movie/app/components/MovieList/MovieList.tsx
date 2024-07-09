'use client'; // this is a client component
import { fetchMovies } from '@/api';
import { useEffect, useState } from 'react';
import { IMovieInfo } from '@/types/types';

import styles from './MovieList.module.css';
import Carousel from '../Carousel/Carousel';

const MovieList: React.FC = () => {
  const [movieData, setMovieData] = useState<IMovieInfo[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchMovies(signal)
      .then((res) => {
        const { data } = res;
        setMovieData(data);
      })
      // 이미 취소된 요청을 다시 취소하려고 하면 CanceledError가 발생
      // cancelled error 처리
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('요청이 취소되었습니다.');
        } else {
          console.error('오류 발생:', error);
        }
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
