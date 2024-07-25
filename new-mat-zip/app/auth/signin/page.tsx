import { NextPage } from 'next';
import React from 'react';
import InputBox from '../_components/input-box/input-box/input-box';

const SigninPage: NextPage = () => {
  return (
    <>
      <InputBox title={'로그인을 진행해주세요'} type="signin" />
    </>
  );
};

export default SigninPage;
