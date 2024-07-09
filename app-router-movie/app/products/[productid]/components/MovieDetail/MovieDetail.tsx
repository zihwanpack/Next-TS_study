import styles from './MovieDetail.module.css';
import MovieDescription from '../MovieDescription/MovieDescription';

import { IMovieDetailProps } from '@/types/types';

const MovieDetail: React.FC<IMovieDetailProps> = ({ productInfo }) => {
  const { creator, creator_email, title, image, summary, instructions } =
    productInfo;

  return (
    <div className={styles.container}>
      <MovieDescription
        title={title}
        creator={creator}
        creator_email={creator_email}
        summary={summary}
        image={image}
      />
      <section>
        <p className={styles['movie-detail-instructions']}>{instructions}</p>
      </section>
    </div>
  );
};

export default MovieDetail;
