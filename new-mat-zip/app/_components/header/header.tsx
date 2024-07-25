import React from 'react';
import styles from './header.module.css';
import { IoFastFoodOutline } from 'react-icons/io5';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { IHeaderLink } from '@/types';

const Header: React.FC = () => {
  const cookieStore = cookies();
  const myAccessCookie = cookieStore.get('myAccessCookie');

  const links: IHeaderLink[] = [
    { href: '/auth/signup', text: '회원가입', isVisible: !myAccessCookie },
    { href: '/auth/signin', text: '로그인', isVisible: !myAccessCookie },
    { href: '/post', text: '게시글', isVisible: myAccessCookie },
    { href: '/my', text: '마이페이지', isVisible: myAccessCookie },
    { href: '/favorite', text: '즐겨찾기', isVisible: myAccessCookie },
  ];

  return (
    <header className={styles.container}>
      <Link href={'/'} className={styles.link}>
        <button className={styles['home-button']}>
          <IoFastFoodOutline size={40} />
          <p>mapzip</p>
        </button>
      </Link>
      <div className={styles['button-wrapper']}>
        {links.map(
          (link) =>
            link.isVisible && (
              <Link key={link.href} href={link.href} className={styles.link}>
                <button className={styles.button}>
                  <p className={styles['login-text']}>{link.text}</p>
                </button>
              </Link>
            )
        )}
      </div>
    </header>
  );
};

export default Header;
