import { useParams } from 'react-router-dom';
import dummyMovies from '../../data/dummyMovies';
import styles from './MovieDetail.module.css';
const MovieDetail = () => {
  const { id } = useParams();
  const movie = dummyMovies.find((movie) => movie.id === id);
  const { creator, creator_email, title, image, summary, instructions } = movie;

  return (
    <div className={styles.container}>
      <article className={styles['movie-detail-article']}>
        <div className={styles['description-box']}>
          <h1 className={styles['movie-detail-title']}>{title}</h1>
          <div className={styles['movie-detail-creator']}>
            <p>{creator}</p>
            <p>{creator_email}</p>
          </div>
          <div className={styles['summary-box']}>
            <p className={styles['movie-detail-summary']}>{summary}</p>
          </div>
        </div>
        <img
          src={image}
          alt={`${title}의 이미지`}
          className={styles['movie-detail-image']}
        />
      </article>
      <section className={styles['instructions-box']}>
        <p className={styles['movie-detail-instructions']}>{instructions}</p>
      </section>
    </div>
  );
};

export default MovieDetail;
