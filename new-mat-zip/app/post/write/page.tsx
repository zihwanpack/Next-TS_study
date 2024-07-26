import { NextPage } from 'next';
import styles from './page.module.css';
import WriteBox from './_components/write-box/write-box';

const WritePage: NextPage = () => {
  return (
    <article className={styles.container}>
      <section className={styles['box-container']}>
        <header>
          <h1 className={styles['page-title']}>글쓰기</h1>
        </header>
        <WriteBox />
      </section>
    </article>
  );
};

export default WritePage;
