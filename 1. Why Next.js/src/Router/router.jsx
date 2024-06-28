import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../Pages/Main/MainPage';
import { Layout } from '../Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
    ],
  },
]);

export { router };
