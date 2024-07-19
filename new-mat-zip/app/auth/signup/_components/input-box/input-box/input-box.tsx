'use client';

import React, { useState } from 'react';
import styles from './input-box.module.css';
import Input from '@/app/_components/input/input';
import { IoFastFoodOutline } from 'react-icons/io5';
import { Form, SubmitHandler, useForm } from 'react-hook-form';
import { fetchSignUp } from '@/api';
import { IFormValues } from '@/types';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const InputBox: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { register, handleSubmit } = useForm<IFormValues>();

  // const onSubmit: SubmitHandler<IFormValues> = async (data) => {
  //   try {
  //     const { email, password } = data;
  //     const result = await fetchSignUp(email, password);
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3000/auth/signup', {
      email,
      password,
    });
    console.log(response);
  };

  return (
    <form>
      <div className={styles.box}>
        <div className={styles.logo}>
          <IoFastFoodOutline size={40} />
          <p className={styles.title}>matzip</p>
        </div>
        <h1>회원가입을 진행해주세요.</h1>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={onSubmit}>회원가입 하기</button>
      </div>
    </form>
  );
};

export default InputBox;
