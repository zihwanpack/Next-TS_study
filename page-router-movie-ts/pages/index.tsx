// 여기가 메인 페이지 파일면 index

import Container from '@/components/Container/Container';
import SideNav from '@/components/SideNav/SideNav';
import MovieList from '@/components/MovieList/MovieList';

import { NextPage } from 'next';

const MainPage: NextPage = () => {
  return (
    <>
      <Container>
        <SideNav />
        <MovieList />
      </Container>
    </>
  );
};

export default MainPage;
