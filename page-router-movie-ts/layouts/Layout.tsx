import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.css';
const Layout = ({ children }) => {
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
