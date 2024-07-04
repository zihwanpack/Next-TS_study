import { useState } from 'react';
import styles from './MovieList.module.css';
import dummyMovies from '../../data/dummyMovies';
import { Link } from 'react-router-dom';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const MovieList = () => {
  const [index, setIndex] = useState(0);
  const moviesToShow = 4;

  const handlePrevButton = () => {
    setIndex(
      (prevIndex) => (prevIndex - 4 + dummyMovies.length) % dummyMovies.length
    );
  };

  const handleFowardButton = () => {
    setIndex((prevIndex) => (prevIndex + 4) % dummyMovies.length);
  };

  const getVisibleMovies = () => {
    const start = index;
    const end = (index + moviesToShow) % dummyMovies.length;
    if (start < end) {
      return dummyMovies.slice(start, end);
    } else {
      return [...dummyMovies.slice(start), ...dummyMovies.slice(0, end)];
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles['carousel-main']}>
        <h2 className={styles['carousel-name']}>레이튼의 최애영화</h2>
        <ul className={styles.wrapper}>
          <button
            onClick={handlePrevButton}
            className={styles['carousel-button']}
          >
            <MdArrowBackIos size="60" color="#ffffff" />
          </button>
          {getVisibleMovies().map((dummyMovie) => {
            const { id, image, title } = dummyMovie;
            return (
              <li key={id} className={styles.carousel}>
                <Link to={`/contents/${id}`}>
                  <img
                    src={image}
                    alt={`${title}의 포스터`}
                    className={styles['carousel-image']}
                  />
                </Link>
              </li>
            );
          })}
          <button
            onClick={handleFowardButton}
            className={styles['carousel-button']}
          >
            <MdArrowForwardIos size="60" color="#ffffff" />
          </button>
        </ul>
      </section>
    </div>
  );
};

export default MovieList;
