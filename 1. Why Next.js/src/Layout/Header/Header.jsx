import { Link } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <Link to="/">
          <img
            src="/images/WATCHA_Logo_Main.svg"
            alt="왓챠 로고"
            className={styles.image}
          />
        </Link>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link
                to="/"
                // 객체 접근시 - 때문에 Bracket Notation으로 접근한다.
                className={`${styles.link} ${styles['pink-button']}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.link}>
                Movies
              </Link>
            </li>
            <li>
              <Link to="/post" className={styles.link}>
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
