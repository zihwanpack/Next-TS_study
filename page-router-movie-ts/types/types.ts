import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IMovieInfo {
  id: string;
  title: string;
  image: string | StaticImport;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

interface ICarouselProps {
  movieData: IMovieInfo[];
}

type TLayoutProps = {
  children: React.ReactNode;
};

type TContainerProps = TLayoutProps;

interface IInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type TMovieDetailInfo = {
  title: string;
  image: string | StaticImport;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

interface IProductIdProps {
  productInfo: TMovieDetailInfo;
}

interface IMovieDetailProps {
  data: {
    productInfo: TMovieDetailInfo;
  };
}

interface MovieDescriptionProps {
  title: string;
  image: string | StaticImport;
  summary: string;
  creator: string;
  creator_email: string;
}

interface IImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
}
export type {
  IMovieInfo,
  ICarouselProps,
  TLayoutProps,
  IInputProps,
  TContainerProps,
  IMovieDetailProps,
  TMovieDetailInfo,
  IImageUploaderProps,
  IProductIdProps,
  MovieDescriptionProps,
};
