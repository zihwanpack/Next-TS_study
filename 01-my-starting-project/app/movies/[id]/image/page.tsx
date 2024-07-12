import { DUMMY_MOVIES } from '@/constants/dummy-movie';
import { notFound } from 'next/navigation';
import { TImagePageProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const ImagePage: React.FC<TImagePageProps> = ({ params }) => {
  const moviesItemSlug = params.id;

  const moviesItem = DUMMY_MOVIES.find(
    (moviesItem) => moviesItem.slug === moviesItemSlug
  );
  // 잘못된 라우팅 처리
  if (!moviesItem) notFound();
  console.log(moviesItem);
  return (
    <div className="fullscreen-image">
      <Image
        src={moviesItem.image}
        alt={moviesItem.title}
        width={500}
        height={500}
      />
    </div>
  );
};

export default ImagePage;
