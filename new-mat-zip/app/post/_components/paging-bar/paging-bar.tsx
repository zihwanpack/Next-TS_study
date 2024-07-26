'use client';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IPagingBarProps } from '@/types';
import styles from './paging-bar.module.css';

const PagingBar: React.FC<IPagingBarProps> = ({ length }) => {
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
