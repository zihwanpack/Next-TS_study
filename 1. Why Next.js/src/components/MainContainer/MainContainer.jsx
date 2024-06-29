import styles from './MainContainer.module.css';
// children prop 설정해주기
const MainContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainContainer;
