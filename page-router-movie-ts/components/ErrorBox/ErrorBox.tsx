import React from 'react';
import styles from './ErrorBox.module.css';

const ErrorBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        잘못된 경로 입니다! 올바른 경로를 입력해주세요
      </div>
    </div>
  );
};

export default ErrorBox;
