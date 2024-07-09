import Container from '../../components/Container/Container';
import SideNav from '../../components/SideNav/SideNav';
import MovieDetail from './components/MovieDetail/MovieDetail';

import { fetchMovieId } from '@/api';
import { NextPage } from 'next';
import { TMovieDetailInfo } from '@/types/types';

interface DetailPageProps {
  params: { productid: string };
}

const DetailPage: NextPage<DetailPageProps> = async ({ params }) => {
  const productId = params.productid;
  const res = await fetchMovieId(productId);
  const productInfo: TMovieDetailInfo = res.data;

  return (
    <>
      <Container>
        <SideNav />
        <MovieDetail productInfo={productInfo} />
      </Container>
    </>
  );
};

export default DetailPage;
