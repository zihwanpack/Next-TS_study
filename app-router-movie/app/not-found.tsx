import React from 'react';
import ErrorBox from './components/ErrorBox/ErrorBox';
import Container from './components/Container/Container';

import { NextPage } from 'next';

const Custom404Page: NextPage = () => {
  return (
    <>
      <Container>
        <ErrorBox />
      </Container>
    </>
  );
};

export default Custom404Page;
