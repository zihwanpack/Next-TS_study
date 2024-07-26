import React from 'react';
import styles from './label-input.module.css';
import { ILabelInputProps } from '@/types';

const LabelInput: React.FC<ILabelInputProps> = ({
  label,

  name,
  placeholder,
}) => {
  return (
    <label htmlFor={name} className={styles.label}>
      <p>{label}:</p>
      <input
        id={name}
        type="text"
        name={name}
        placeholder={placeholder}
        className={styles.input}
        required={true}
      />
    </label>
  );
};

export default LabelInput;
