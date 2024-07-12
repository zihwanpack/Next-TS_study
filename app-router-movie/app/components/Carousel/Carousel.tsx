import styles from './Carousel.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useState } from 'react';
import { ICarouselProps } from '@/types/types';

const Carousel: React.FC<ICarouselProps> = ({ movieData }) => {
  const [index, setIndex] = useState(0);
  const moviesToShow = 4;
  const howMuchMove = 4;

  const handlePrevButton = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - howMuchMove + movieData.length) % movieData.length
    );
  };

  const handleFowardButton = () => {
    setIndex((prevIndex) => (prevIndex + howMuchMove) % movieData.length);
  };

  const getVisibleMovies = () => {
    const start = index;
    const end = (index + moviesToShow) % movieData.length;
    if (start < end) {
      return movieData.slice(start, end);
    } else {
      return [...movieData.slice(start), ...movieData.slice(0, end)];
    }
  };
  return (
    <section className={styles['carousel-main']}>
      <h2 className={styles['carousel-name']}>레이튼의 최애영화</h2>
      <ul className={styles.wrapper}>
        <button
          onClick={handlePrevButton}
          className={styles['carousel-button']}
        >
          <MdArrowBackIos size="60" color="#ffffff" />
        </button>
        {getVisibleMovies().map((movieData) => {
          const { id, image, title } = movieData;
          const {} = movieData;
          return (
            <li key={id} className={styles.carousel}>
              <Link
                href={`/products/${id}`}
                className={styles['carousel-image']}
              >
                <Image
                  src={image}
                  alt={`${title}의 포스터`}
                  className={styles['carousel-image']}
                  width={300}
                  height={100}
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
  );
};

export default Carousel;
