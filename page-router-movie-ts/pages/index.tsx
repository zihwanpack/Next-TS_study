// 여기가 메인 페이지 파일면 index

import { fetchMovies } from '@/api';
import MovieList from '@/components/MovieList/MovieList';
import Container from '@/components/Container/Container';
import SideNav from '@/components/SideNav/SideNav';
const MainPage = () => {
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

// server side에서 데이터를 받아오려면 아래 코드를 작성해줘야한다.
export async function getServerSideProps() {
  const response = await fetchMovies();
  return {
    props: {
      movieInfo: response.data,
    },
  };
}
