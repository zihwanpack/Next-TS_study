import Link from 'next/link';
import styles from './SideNav.module.css';
import Image from 'next/image';
const SideNav: React.FC = () => {
  return (
    <nav className={styles['navigation-bar']}>
      <Link href="/post" className={styles['link-box']}>
        <Image
          src="/images/WATCHA_Logo_SideBar.svg"
          alt="내가 직접 수정한 svg 왓챠 아이콘"
          className={styles.icon}
          height={100}
          width={100}
        />
        <p className={styles.link}>추천해줘!</p>
      </Link>
    </nav>
  );
};

export default SideNav;
