import React from 'react';
import styles from './write-box.module.css';
import { createMyPost } from '@/api/index';
import { IWritePostProps } from '@/types/index';
import LabelInput from '../label-input/label-input';

const WriteBox: React.FC = () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    const data: IWritePostProps = {
      latitude: formData.get('latitude'),
      longitude: formData.get('longitude'),
      color: formData.get('color'),
      address: formData.get('address'),
      title: formData.get('title'),
      description: formData.get('description'),
      date: new Date().toISOString(),
      score: Number(formData.get('score')),
      imageUris: formData.getAll('imageUris'),
    };
    try {
      const result = await createMyPost(data);
      console.log(result);
    } catch (err) {
      console.log('에러', err);
    }
  };
  return (
    <div className={styles.box}>
      <form action={handleSubmit} className={styles['input-container']}>
        <div className={styles['input-box']}>
          <div className={styles['input-sector']}>
            <LabelInput label="제목" name="title" placeholder="제목" />
            <LabelInput label="주소" name="address" placeholder="주소" />
            <LabelInput label="색상" name="color" placeholder="색상" />
          </div>
          <div className={styles['input-sector']}>
            <LabelInput label="점수" name="score" placeholder="점수 (1~5)" />
            <LabelInput label="위도" name="latitude" placeholder="위도" />
            <LabelInput label="경도" name="longitude" placeholder="경도" />
          </div>
        </div>
        <div className={styles['textarea-container']}>
          <label htmlFor="description" className={styles['textarea-label']}>
            <p>내용:</p>
            <textarea
              id="description"
              name="description"
              placeholder="내용을 입력하세요"
              required
              className={styles.textarea}
            />
          </label>
        </div>
        <button type="submit" className={styles.button}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WriteBox;
