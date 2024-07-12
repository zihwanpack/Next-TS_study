import { DUMMY_MOVIES } from '@/constants/dummy-movie';
import { notFound } from 'next/navigation';
import { TImagePageProps } from '@/types';
import React from 'react';

const ImagePage: React.FC<TImagePageProps> = ({ params }) => {
  const moviesItemTitle = params.id;

  const moviesItem = DUMMY_MOVIES.find(
    (moviesItem) => moviesItem.title === moviesItemTitle
  );
  // 잘못된 라우팅 처리
  if (!moviesItem) notFound();
  console.log(moviesItem);
  return (
    <div className="fullscreen-image">
      <img src={moviesItem.image} alt={moviesItem.title} />
    </div>
  );
};

export default ImagePage;
