import React from 'react';
import { TMoviesDetailLayout } from '@/types';

const MoviesDetailLayout: React.FC<TMoviesDetailLayout> = ({
  children,
  modals,
}) => {
  return (
    <>
      {modals}
      {children}
    </>
  );
};

export default MoviesDetailLayout;
