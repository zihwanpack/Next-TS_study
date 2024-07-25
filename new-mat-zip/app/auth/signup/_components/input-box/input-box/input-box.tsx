import styles from './input-box.module.css';
import Input from '@/app/_components/input/input';
import { redirect } from 'next/navigation';
import { fetchSignUp } from '@/api';

const InputBox: React.FC = async () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const result = await fetchSignUp(email, password);

      if (result) {
        console.log(result);
        // redirect('/auth/signin');
      } else {
        console.log('회원가입 실패', result);
      }
    } catch (error) {
      console.log('회원가입 중 오류 발생:', error);
    }
  };

  return (
    <article className={styles.container}>
      <section className={styles.description}>
        <h1 className={styles.title}>계정을 생성합니다</h1>
        <p>필요한 정보를 입력해주세요</p>
      </section>
      <section className={styles.box}>
        <form action={handleSubmit}>
          <div className={styles['input-box']}>
            <Input title="email" />
            <Input title="password" />
          </div>
          <button className={styles.button} type="submit">
            가입하기
          </button>
        </form>
      </section>
    </article>
  );
};

export default InputBox;
