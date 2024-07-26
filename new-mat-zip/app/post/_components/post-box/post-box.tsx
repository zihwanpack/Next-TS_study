'use client';

// 서버 컴포넌트에 클라이언트 컴포로 데이터 전달 가능!

import { IPostBoxProps } from '@/types';
import styles from './post-box.module.css';
import Link from 'next/link';

const PostBox: React.FC<{ data: IPostBoxProps[] }> = ({ data }) => {
  console.log(data);
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
              <span className={styles.category}>주소</span>
              <span className={styles.category}>작성일</span>
              <span className={styles.category}>별점</span>
            </div>
          </li>
          {data?.map((post) => {
            const { id, title, date, score, address } = post;
            const modifiedDate = date.substring(0, date.indexOf('T'));
            return (
              <li className={styles['post-line']} key={id}>
                <span className={styles.post}>{id}</span>
                <span className={styles.post}>{title}</span>
                <div className={styles.information}>
                  <span className={styles.post}>{address}</span>
                  <span className={styles.post}>{modifiedDate}</span>
                  <span>{String.fromCodePoint(0x1f31f).repeat(score)}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PostBox;
