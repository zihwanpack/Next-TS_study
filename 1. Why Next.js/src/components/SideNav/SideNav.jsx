import { Link } from 'react-router-dom';
import styles from './SideNav.module.css';
const SideNav = () => {
  return (
    <nav className={styles['navigation-bar']}>
      <Link to="/post" className={styles['link-box']}>
        <img
          src="/images/WATCHA_Logo_SideBar.svg"
          alt="내가 직접 수정한 svg 왓챠 아이콘"
          className={styles.icon}
        />
        <p className={styles.link}>추천해줘!</p>
      </Link>
    </nav>
  );
};

export default SideNav;
