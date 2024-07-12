import MovieList from '@/app/_components/movie-list/movie-list';
import { TFilteredNewsPageProps } from '@/types';
import { getAvailableMoviesYears, getMoviesForYear } from '@/app/_lib/movies';
import React from 'react';
import Link from 'next/link';

const FilteredNewsPage: React.FC<TFilteredNewsPageProps> = ({ params }) => {
  const newsYear = params.filter;
  const links = getAvailableMoviesYears();

  const movies = getMoviesForYear(newsYear);
  console.log(newsYear);
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/store/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default FilteredNewsPage;
