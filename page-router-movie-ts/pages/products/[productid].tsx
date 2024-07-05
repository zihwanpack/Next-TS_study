import Container from '../../components/Container/Container';
import SideNav from '../../components/SideNav/SideNav';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import { fetchMovieId } from '@/api';

const DetailPage = (productInfo) => {
  return (
    <>
      <Container>
        <SideNav />
        <MovieDetail data={productInfo} />
      </Container>
    </>
  );
};

export default DetailPage;

export async function getServerSideProps(context) {
  const productId = context.params.productid;
  const response = await fetchMovieId(productId);
  return { props: { productInfo: response.data } };
}
