import React from 'react';
import { NextPage } from 'next';
import { IDetailPageProps } from '@/types';
import { getDetailPost } from '@/api';

const DetailPage: NextPage<IDetailPageProps> = async ({ params }) => {
  const { id } = params;
  const data = await getDetailPost(id);
  return (
    <article>
      <section></section>
    </article>
  );
};

export default DetailPage;
