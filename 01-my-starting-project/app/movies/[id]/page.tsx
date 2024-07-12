import { DUMMY_MOVIES } from '@/constants/dummy-movie';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TMoviesDetailPage } from '@/types';
import { NextPage } from 'next';
const MoviesDetailPage: NextPage<TMoviesDetailPage> = ({ params }) => {
  const moviesSlug = params.id;
  const moviesItem = DUMMY_MOVIES.find(
    (moviesItem) => moviesItem.slug === moviesSlug
  );

  // 404 처리 제대로하는 방법
  if (!moviesItem) {
    notFound();
  }

  return (
    <article className={'news-article'}>
      <header>
        <Link href={`/movies/${moviesItem.slug}/image`}>
          <Image
            src={`${moviesItem.image}`}
            alt={moviesItem.title}
            width={300}
            height={200}
            className="customImage"
          />
        </Link>
        <h1>{moviesItem.title}</h1>
        <time dateTime={moviesItem.date}>{moviesItem.date}</time>
        <p>{moviesItem.instructions}</p>
      </header>
    </article>
  );
};

export default MoviesDetailPage;
