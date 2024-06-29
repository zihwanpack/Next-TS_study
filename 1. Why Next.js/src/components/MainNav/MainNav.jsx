import { Link } from 'react-router-dom';
import styles from './MainNav.module.css';
const MainNav = () => {
  return (
    <nav className={styles['navigation-bar']}>
      <Link to="/post" className={styles['link-box']}>
        <img
          src="/images/WATCHA_Logo_SideBar.svg"
          alt="내가 직접 수정한 svg 왓챠 이미지"
        />
        <p className={styles.link}>최애 영화를 공유해주세요!</p>
      </Link>
    </nav>
  );
};

export default MainNav;
