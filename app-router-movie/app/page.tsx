import Container from './components/Container/Container';
import SideNav from './components/SideNav/SideNav';
import MovieList from './components/MovieList/MovieList';

import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <SideNav />
        <MovieList />
      </Container>
    </>
  );
};

export default Home;
