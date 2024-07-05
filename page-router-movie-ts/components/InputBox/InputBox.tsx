import styles from './InputBox.module.css';
import Input from '../Input/Input.js';
import ImageUploader from '../ImageUploader/ImageUploader.js';

import { useState } from 'react';
const InputBox = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [summary, setSummary] = useState('');
  const [instructions, setInstructions] = useState('');
  const [creator, setCreator] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newMovie = {
      id,
      title,
      image,
      summary,
      instructions,
      creator,
      creator_email: email,
    };
    console.log(newMovie);
  };
  return (
    <section className={styles.container}>
      <div className={styles['director-info']}>
        <Input value={'creator'} onChange={(e) => setCreator(e.target.value)} />
        <Input value={'email'} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <Input value={'id'} onChange={(e) => setId(e.target.value)} />
      <Input value={'title'} onChange={(e) => setTitle(e.target.value)} />
      <Input value={'summary'} onChange={(e) => setSummary(e.target.value)} />
      <Input
        value={'instructions'}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <div className={styles['button-box']}>
        <ImageUploader onImageUpload={(image) => setImage(image)} />
        <button onClick={submitHandler} className={styles['submit-button']}>
          제출하기
        </button>
      </div>
    </section>
  );
};

export default InputBox;
