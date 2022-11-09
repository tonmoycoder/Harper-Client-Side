import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
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
    ],
  },
]);

export default router;