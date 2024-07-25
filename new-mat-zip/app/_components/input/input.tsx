import styles from './input.module.css';
import { IInputProps } from '@/types';

const Input: React.FC<IInputProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={`${title}-id`} className={styles['input-title']}>
        {title}
      </label>
      <input
        type={title === 'password' ? 'password' : 'text'}
        name={title}
        className={styles['input-style']}
        autoComplete={title === 'password' ? 'off' : 'on'}
      />
    </div>
  );
};

export default Input;
