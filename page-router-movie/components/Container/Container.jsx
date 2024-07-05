import styles from './Container.module.css';
// children prop 설정해주기
const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
