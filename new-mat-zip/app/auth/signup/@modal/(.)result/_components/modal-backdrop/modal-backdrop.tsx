import { useRouter } from 'next/navigation';
import { IModalBackdropProps } from '@/types/index';
import styles from './modal-backdrop.module.css';

const ModalBackdrop: React.FC<IModalBackdropProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles['modal-background']} onClick={router.back}>
      {children}
    </div>
  );
};

export default ModalBackdrop;
