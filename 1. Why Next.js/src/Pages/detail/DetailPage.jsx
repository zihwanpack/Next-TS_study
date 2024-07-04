import Container from '../../components/Container/Container';
import SideNav from '../../components/SideNav/SideNav';
import MovieDetail from '../../components/MovieDetail/MovieDetail';

const DetailPage = () => {
  return (
    <>
      <Container>
        <SideNav />
        <MovieDetail />
      </Container>
    </>
  );
};

export default DetailPage;
