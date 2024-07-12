import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const NewsList = ({ news }) => {
  return (
    // ul, li 써주자
    <ul id="news-list">
      {news.map((dummyNews) => {
        return (
          <li key={dummyNews.id}>
            <Link href={`/news/${dummyNews.slug}`}>
              <Image
                src={`/images/news/${dummyNews.image}`}
                alt={`${dummyNews.title}`}
                width={200}
                height={200}
              />
              <span>{dummyNews.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
