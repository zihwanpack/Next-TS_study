import styles from './page.module.css';
import PostBox from './_components/post-box/post-box';

import { NextPage } from 'next';

const PostPage: NextPage = () => {
  return (
    <article className={styles.container}>
      <PostBox />
    </article>
  );
};

export default PostPage;
