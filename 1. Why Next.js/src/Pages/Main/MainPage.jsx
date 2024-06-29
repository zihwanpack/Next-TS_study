import MainContainer from '../../components/MainContainer/MainContainer';
import MainNav from '../../components/MainNav/MainNav';
import MovieList from '../../components/MovieList/MovieList';
const MainPage = () => {
  return (
    <>
      <MainContainer>
        <MainNav />
        <MovieList />
      </MainContainer>
    </>
  );
};
export default MainPage;
