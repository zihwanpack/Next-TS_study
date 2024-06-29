import styles from './MovieList.module.css';
import dummyMovies from '../../data/dummyMovies';
import { Link } from 'react-router-dom';
const MovieList = () => {
  return (
    <div className={styles.container}>
      <ul className={styles['slide-container']}>
        <h2>지환이의 최애영화</h2>
        <div className={styles.slide}>
          {dummyMovies &&
            dummyMovies.map((dummyMovie) => {
              const { id, image, title } = dummyMovie;
              return (
                <li key={id} className={styles.movie}>
                  <Link to="/movies/:slug">
                    <img
                      src={image}
                      alt={title}
                      className={styles['movie-image']}
                    />
                  </Link>
                </li>
              );
            })}
        </div>
      </ul>
    </div>
  );
};

export default MovieList;
