import Container from '../../components/Container/Container';
import MoviePost from '../../components/MoviePost/MoviePost';

import { NextPage } from 'next';

const PostPage: NextPage = () => {
  return (
    <>
      <Container>
        <MoviePost />
      </Container>
    </>
  );
};

export default PostPage;
