import styles from './MovieList.module.css';
import Carousel from '../Carousel/Carousel';

const MovieList = () => {
  return (
    <div className={styles.container}>
      <Carousel />
    </div>
  );
};

export default MovieList;
