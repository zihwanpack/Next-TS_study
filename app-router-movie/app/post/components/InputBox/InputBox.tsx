'use client'; // this is a client component

import styles from './InputBox.module.css';
import Input from '../Input/Input';
import ImageUploader from '../ImageUploader/ImageUploader';

import { ChangeEvent, useState } from 'react';
import { IMovieInfo } from '@/types/types';

const InputBox: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [instructions, setInstructions] = useState<string>('');
  const [creator, setCreator] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const submitHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newMovie: IMovieInfo = {
      id,
      title,
      image,
      summary,
      instructions,
      creator,
      creator_email: email,
    };
  };
  return (
    <section className={styles.container}>
      <div className={styles['director-info']}>
        <Input
          value={'creator'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCreator(e.target.value)
          }
        />
        <Input
          value={'email'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>
      <Input
        value={'id'}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
      />
      <Input
        value={'title'}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <Input
        value={'summary'}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSummary(e.target.value)
        }
      />
      <Input
        value={'instructions'}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInstructions(e.target.value)
        }
      />
      <div className={styles['button-box']}>
        <ImageUploader onImageUpload={(image: string) => setImage(image)} />
        <button onClick={submitHandler} className={styles['submit-button']}>
          제출하기
        </button>
      </div>
    </section>
  );
};

export default InputBox;
