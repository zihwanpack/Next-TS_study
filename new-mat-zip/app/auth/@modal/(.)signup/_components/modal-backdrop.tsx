import { useRouter } from 'next/navigation';
import { TModalBackdropProps } from '@/types/index';
import styles from './modal-backdrop.module.css';

const ModalBackdrop: React.FC<TModalBackdropProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles['modal-background']} onClick={router.back}>
      {children}
    </div>
  );
};

export default ModalBackdrop;
