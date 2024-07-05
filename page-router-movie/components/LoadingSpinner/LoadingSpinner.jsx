import { ClimbingBoxLoader } from 'react-spinners';
import styles from './LoadingSpinner.module.css';
const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>로딩중...</p>
      <ClimbingBoxLoader color="#ffffff" size={30} />
    </div>
  );
};

export default LoadingSpinner;
