import styles from './post-box.module.css';
import Link from 'next/link';
const PostBox: React.FC = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles['header-box']}>
          <h1 className={styles['page-title']}>게시판</h1>
          <p>자유롭게 글을 볼 수 있는 게시판입니다.</p>
        </div>
        <Link href={'/post/write'}>
          <button className={styles.button}>글쓰기</button>
        </Link>
      </header>

      <div className={styles.box}>
        <ul className={styles['line-box']}>
          <li className={styles.line}>
            <span className={styles.category}>번호</span>
            <span className={styles.category}>제목</span>
            <div className={styles.information}>
              <span className={styles.category}>글쓴이</span>
              <span className={styles.category}>작성일</span>
              <span className={styles.category}>별점</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PostBox;
