import React from 'react';
import './globals.css';
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <div className={'error'}>
      <h1>찾을 수 없는 페이지입니다.</h1>
      <p>존재하지 않는 페이지입니다.</p>
    </div>
  );
};

export default NotFoundPage;
