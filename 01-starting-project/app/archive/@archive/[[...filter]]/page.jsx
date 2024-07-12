import NewsList from '@/app/_components/news-list/news-list';
import { getAvailableNewsYears, getNewsForYear } from '@/app/_lib/news';
import React from 'react';
import Link from 'next/link';

const FilteredNewsPage = ({ params }) => {
  const newsYear = params.filter;
  const links = getAvailableNewsYears();

  const news = getNewsForYear(newsYear);
  console.log(newsYear);
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default FilteredNewsPage;
