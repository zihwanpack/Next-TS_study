import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TMovieListProps } from '@/types';
const MovieList: React.FC<TMovieListProps> = ({ movies }) => {
  return (
    // ul, li 써주자
    <ul className="news-list">
      {movies.map((dummyMovies) => {
        return (
          <li key={dummyMovies.id}>
            <Link href={`/movies/${dummyMovies.slug}`}>
              <Image
                src={`${dummyMovies.image}`}
                alt={`${dummyMovies.title}`}
                width={200}
                height={200}
              />
              <span>{dummyMovies.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
