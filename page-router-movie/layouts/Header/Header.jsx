import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <Link href="/">
          <Image
            src="/images/WATCHA_Logo_Main.svg"
            alt="왓챠 로고"
            width={200}
            height={200}
            className={styles.image}
          />
        </Link>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link
                href="/"
                // 객체 접근시 - 때문에 Bracket Notation으로 접근한다.
                className={`${styles.link} ${styles['pink-button']}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.link}>
                Movies
              </Link>
            </li>
            <li>
              <Link href="/post" className={styles.link}>
                Post
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
