import styles from './input-box.module.css';
import Input from '@/app/_components/input/input';
import { redirect } from 'next/navigation';
import { fetchSignUp, fetchLogin } from '@/api';
import { TInputBox } from '@/types/index';

const InputBox: React.FC<TInputBox> = async ({ title, type }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    const email = formData.get('email');
    const password = formData.get('password');
    // redirect는 try catch에서 쓰면 안됨!

    try {
      const result =
        type === 'signup'
          ? await fetchSignUp(email, password) // 회원가입
          : await fetchLogin(email, password); // 로그인

      if (result) {
        console.log(result);
      } else {
        type === 'signup'
          ? console.log('회원가입 실패', result)
          : console.log('로그인 실패', result);
      }
    } catch (error) {
      type === 'signup'
        ? console.log('회원가입 중 오류 발생:', error)
        : console.log('로그인 중 오류 발생:', error);
    } finally {
      if (type === 'signup') redirect('/auth/signin');
    }
  };
  return (
    <article className={styles.container}>
      <section className={styles.description}>
        <h1 className={styles.title}>{title}</h1>
        <p>필요한 정보를 입력해주세요</p>
      </section>
      <section className={styles.box}>
        <form action={handleSubmit}>
          <div className={styles['input-box']}>
            <Input title="email" />
            <Input title="password" />
          </div>
          <button className={styles.button} type="submit">
            {type === 'signup' ? '가입하기' : '로그인하기'}
          </button>
        </form>
      </section>
    </article>
  );
};

export default InputBox;
