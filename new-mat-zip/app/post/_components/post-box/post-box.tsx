'use client';

// 서버 컴포넌트에 클라이언트 컴포로 데이터 전달 가능!

import { IPostBoxProps } from '@/types';
import styles from './post-box.module.css';
import Link from 'next/link';

const PostBox: React.FC<{ data: IPostBoxProps[] }> = ({ data }) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles['header-title']}>게시판</h1>
          <p>자유롭게 글을 볼 수 있는 게시판입니다.</p>
        </div>
        <Link href={'/post/write'}>
          <button className={styles['link-button']}>글쓰기</button>
        </Link>
      </header>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>제목</th>
            <th>주소</th>
            <th>번호</th>
            <th>작성일</th>
            <th>별점</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((post) => {
            const { id, title, date, score, address } = post;
            const modifiedDate = date.substring(0, date.indexOf('T'));
            return (
              <tr
                key={id}
                style={{
                  textAlign: 'center',
                }}
              >
                <td>{id}</td>
                <td>{title}</td>
                <td>{modifiedDate}</td>
                <td>{score}</td>
                <td>{address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default PostBox;
