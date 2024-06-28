import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contents}>
        <h2 className={styles.title}>이건 footer이다.</h2>
      </div>
    </footer>
  );
};

export { Footer };
