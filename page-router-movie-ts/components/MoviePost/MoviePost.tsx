import styles from './MoviePost.module.css';
import InputBox from '../InputBox/InputBox';
const MoviePost: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Please recommend your favorite movie!</h1>
      <InputBox />
    </div>
  );
};

export default MoviePost;
