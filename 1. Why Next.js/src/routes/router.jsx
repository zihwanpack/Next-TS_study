import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/main/MainPage';
import { Layout } from '../layout/Layout';

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
    ],
  },
]);

export { router };
