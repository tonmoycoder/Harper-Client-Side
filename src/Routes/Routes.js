import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../Pages/Blog/Blog';
import Homes from '../Pages/Home/Homes/Homes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Homes></Homes>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  },
]);

export default router;