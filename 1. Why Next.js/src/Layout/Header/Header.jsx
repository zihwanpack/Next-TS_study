import { Link } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <img
          src="../../../public/images/WATCHA_Logo_Main.svg"
          alt="왓챠 로고"
          className={styles.image}
        />
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/post">Share Your Favorite Movie</Link>
            </li>
            <li>메뉴 2</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export { Header };
