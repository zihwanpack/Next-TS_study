import React from 'react';
import { TStoreLayout } from '@/types';

const StoreLayout: React.FC<TStoreLayout> = ({ store, newest }) => {
  return (
    <div>
      <h1>New Store</h1>
      <section id={'archive-filter'}>{store}</section>
      <section id={'archive-latest'}>{newest}</section>
    </div>
  );
};

export default StoreLayout;
