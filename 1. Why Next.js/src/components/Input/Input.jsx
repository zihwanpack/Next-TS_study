import styles from './Input.module.css';

const Input = ({ value, onChange }) => {
  const isCaution = value === '주의 사항';
  const inputBoxClass = isCaution
    ? styles['caution-input-box']
    : styles['input-box'];

  return (
    <div className={inputBoxClass}>
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
