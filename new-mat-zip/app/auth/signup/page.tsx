import { NextPage } from 'next';
import React from 'react';
import InputBox from '../_components/input-box/input-box/input-box';
const SignupPage: NextPage = async () => {
  return (
    <>
      <InputBox title={'회원정보을 진행해주세요'} />
    </>
  );
};

export default SignupPage;
