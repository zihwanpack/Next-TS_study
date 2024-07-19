import styles from './input.module.css';
import { IInputProps } from '@/types';

const Input: React.FC<IInputProps> = ({ title, register }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={`${title}-id`} className={styles['input-title']}>
        {title}
      </label>
      <input
        {...register}
        type={title === '비밀번호' ? 'password' : 'text'}
        id={`${title}-id`}
        className={styles['input-style']}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
