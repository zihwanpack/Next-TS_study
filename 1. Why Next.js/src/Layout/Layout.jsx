import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Fotter';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export { Layout };
