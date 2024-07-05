import Container from '../../components/Container/Container';
import SideNav from '../../components/SideNav/SideNav';
import MovieDetail from '../../components/MovieDetail/MovieDetail';

import { fetchMovieId } from '@/api';
import { GetServerSideProps, NextPage, GetServerSidePropsContext } from 'next';
import { IProductIdProps } from '@/types/types';

const DetailPage: NextPage<IProductIdProps> = (productInfo) => {
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

export const getServerSideProps: GetServerSideProps = async function (
  context: GetServerSidePropsContext
) {
  const productId = context.params?.productid;
  const response = await fetchMovieId(productId);

  return { props: { productInfo: response.data } };
};
