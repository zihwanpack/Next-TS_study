import styles from './Container.module.css';
// children prop 설정해주기
import { TContainerProps } from '@/types/types';
const Container: React.FC<TContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
