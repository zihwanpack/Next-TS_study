import { DUMMY_NEWS } from '@/constants/dummuy-news';
import { notFound } from 'next/navigation';

import React from 'react';

const ImagePage = ({ params }) => {
  const newsItemSlug = params.id;

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );
  // 잘못된 라우팅 처리
  if (!newsItem) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
