import { createBrowserRouter } from 'react-router-dom';
import { Layout, MainPage, DetailPage, PostPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // 기본페이지 정할 때 이렇게 지정함
        path: '',
        element: <MainPage />,
      },
      {
        path: 'contents/:id',
        element: <DetailPage />,
      },
      {
        path: 'post',
        element: <PostPage />,
      },
    ],
  },
]);

export default router;
