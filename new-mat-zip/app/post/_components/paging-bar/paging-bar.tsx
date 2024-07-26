import React from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './paging-bar.module.css';

const PagingBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <button>
        <FaArrowLeft />
      </button>
      <ul>
        <li></li>
      </ul>
      <button>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default PagingBar;
