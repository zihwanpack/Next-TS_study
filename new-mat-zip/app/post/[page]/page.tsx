import { NextPage } from 'next';
import { IPostPageProps, IPostBoxProps } from '@/types';
import React from 'react';
import PostBox from '../_components/post-box/post-box';
import styles from './page.module.css';
import PagingBar from '../_components/paging-bar/paging-bar';
import { getMyPost } from '@/api';

const PostPage: NextPage<IPostPageProps> = async ({ params }) => {
  const { page } = params;
  const data = await getMyPost(page);

  return (
    <article className={styles.container}>
      <PostBox data={data} />
      <PagingBar />
    </article>
  );
};

export default PostPage;
