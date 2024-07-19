import React from 'react';
import styles from './header.module.css';
import { IoFastFoodOutline } from 'react-icons/io5';
import Link from 'next/link';
const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link href={'/'} className={styles.link}>
        <button className={styles['home-button']}>
          <IoFastFoodOutline size={40} />
          <p>mapzip</p>
        </button>
      </Link>
      <div className={styles['button-wrapper']}>
        <Link href={'/auth/signup'} className={styles.link}>
          <button className={styles['button']}>
            <p>회원가입</p>
          </button>
        </Link>
        <Link href={'/auth/signin'} className={styles.link}>
          <button className={styles['button']}>
            <p>로그인</p>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
