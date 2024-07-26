import styles from './input.module.css';
import { IInputProps } from '@/types';

const Input: React.FC<IInputProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={title} className={styles['input-title']}>
        <p>{title}</p>
      </label>
      <input
        id={title}
        type={title === 'password' ? 'password' : 'text'}
        name={title}
        className={styles['input-style']}
        autoComplete={title === 'password' ? 'off' : 'on'}
        required
      />
    </div>
  );
};

export default Input;
