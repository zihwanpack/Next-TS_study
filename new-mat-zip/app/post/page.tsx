import styles from './page.module.css';
import PostBox from './_components/post-box/post-box';
import PagingBar from './_components/paging-bar/paging-bar';
import { NextPage } from 'next';

const PostPage: NextPage = () => {
  return (
    <article className={styles.container}>
      <PostBox />
      <PagingBar />
    </article>
  );
};

export default PostPage;
