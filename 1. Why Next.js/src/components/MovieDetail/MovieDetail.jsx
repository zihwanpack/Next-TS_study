import { useParams } from 'react-router-dom';
import dummyMovies from '../../data/dummyMovies';
import styles from './MovieDetail.module.css';
import MovieDescription from '../MovieDescription/MovieDescription';
const MovieDetail = () => {
  const { id } = useParams();
  const movie = dummyMovies.find((movie) => movie.id === id);
  const { creator, creator_email, title, image, summary, instructions } = movie;

  return (
    <div className={styles.container}>
      <MovieDescription
        title={title}
        creator={creator}
        creator_email={creator_email}
        summary={summary}
        image={image}
      />
      <section className={styles['instructions-box']}>
        <p className={styles['movie-detail-instructions']}>{instructions}</p>
      </section>
    </div>
  );
};

export default MovieDetail;
