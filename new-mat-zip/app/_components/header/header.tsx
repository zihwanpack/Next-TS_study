'use client';

import React from 'react';
import styles from './header.module.css';
import { IoFastFoodOutline } from 'react-icons/io5';
import Link from 'next/link';
import { IHeaderLink } from '@/types';

import { useCookies } from 'next-client-cookies';
import { fetchLogout } from '@/api/index';

const Header: React.FC = () => {
  const cookieStore = useCookies();
  const myRefreshCookie = cookieStore.get('myRefreshCookie');

  const handleLogout = async () => {
    try {
      const result = await fetchLogout();
      if (result && myRefreshCookie !== undefined) {
        cookieStore.remove('myRefreshCookie');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const links: IHeaderLink[] = [
    { href: '/auth/signup', text: '회원가입', isVisible: !myRefreshCookie },
    { href: '/auth/signin', text: '로그인', isVisible: !myRefreshCookie },
    { href: '/post/1', text: '게시글', isVisible: myRefreshCookie },
    { href: '/my', text: '마이페이지', isVisible: myRefreshCookie },
    { href: '/favorite', text: '즐겨찾기', isVisible: myRefreshCookie },
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
        {myRefreshCookie && (
          <button className={styles.button} onClick={handleLogout}>
            <p className={styles['login-text']}>로그아웃</p>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
