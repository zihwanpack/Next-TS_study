import { DUMMY_NEWS } from '@/constants/dummuy-news';
import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
const newsDeatilPage = ({ params }) => {
  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  // 404 처리 제대로하는 방법
  if (!newsItem) {
    notFound();
  }

  return (
    <article className={'news-article'}>
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={200}
            height={200}
          ></Image>
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
        <p>{newsItem.content}</p>
      </header>
    </article>
  );
};

export default newsDeatilPage;
