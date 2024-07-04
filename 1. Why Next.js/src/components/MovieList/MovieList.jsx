import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './MovieList.module.css';
import { lazy, Suspense } from 'react';

const Carousel = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../Carousel/Carousel')), 2000);
  });
});

const MovieList = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<LoadingSpinner />}>
        <Carousel />
      </Suspense>
    </div>
  );
};

export default MovieList;
