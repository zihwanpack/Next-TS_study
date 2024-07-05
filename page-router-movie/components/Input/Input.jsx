import styles from './Input.module.css';
import classNames from 'classnames';

const cx = classNames.bind(styles);
const Input = ({ value, onChange }) => {
  const isCaution = value === '주의 사항';

  return (
    <div
      className={cx(
        isCaution ? styles['caution-input-box'] : styles['input-box']
      )}
    >
      <p>{`${value}:`}</p>
      <input
        type="text"
        className={styles['input-style']}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
