import styles from './MovieDescription.module.css';
const MovieDescription = ({
  title,
  creator,
  creator_email,
  summary,
  image,
}) => {
  return (
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
  );
};

export default MovieDescription;
