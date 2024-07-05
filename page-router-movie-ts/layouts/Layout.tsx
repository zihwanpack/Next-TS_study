import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.css';
import { TLayoutProps } from '@/types/types';
const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
