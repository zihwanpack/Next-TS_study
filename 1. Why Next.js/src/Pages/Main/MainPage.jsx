import Container from '../../components/Container/Container';
import SideNav from '../../components/SideNav/SideNav';
import MovieList from '../../components/MovieList/MovieList';

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
