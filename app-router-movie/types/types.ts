import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IMovieBaseInfo {
  title: string;
  image: string | StaticImport;
  summary: string;
  creator: string;
  creator_email: string;
}

interface IMovieInfo extends IMovieBaseInfo {
  id: string;
  instructions: string;
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

type TMovieDetailInfo = IMovieBaseInfo & {
  instructions: string;
};

interface IMovieDetailProps {
  productInfo: TMovieDetailInfo;
}

type MovieDescriptionProps = IMovieBaseInfo;

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
  MovieDescriptionProps,
};
