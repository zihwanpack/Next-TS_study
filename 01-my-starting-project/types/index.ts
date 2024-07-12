type TMovieData = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
  date: string;
};

type TFilteredNewsPageProps = {
  params: {
    filter: string[];
  };
};

type TMovieListProps = {
  movies: TMovieData[];
};

type TInterceptImagePageProps = {
  params: { id: string };
};

type TImagePageProps = TInterceptImagePageProps;

type TMoviesDetailPage = TInterceptImagePageProps;

type TMoviesDetailLayout = {
  children: React.ReactNode;
  modals: React.ReactNode;
};

type TStoreLayout = {
  store: React.ReactNode;
  newest: React.ReactNode;
};

export type {
  TMovieData,
  TFilteredNewsPageProps,
  TMovieListProps,
  TInterceptImagePageProps,
  TImagePageProps,
  TMoviesDetailLayout,
  TMoviesDetailPage,
  TStoreLayout,
};
