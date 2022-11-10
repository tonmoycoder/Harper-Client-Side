import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import AddService from '../Pages/AddService/AddService';
import Blog from '../Pages/Blog/Blog';
import Error from '../Pages/Error/Error';
import Homes from '../Pages/Home/Homes/Homes';
import Login from '../Pages/Login/Login';
import EditComment from '../Pages/Others/Review/EditComment';
import MyReviews from '../Pages/Others/Review/MyReview';
import Register from '../Pages/Register/Register';
import Service from '../Pages/Services/Service';
import Services from '../Pages/Services/Services';
import Private from '../Private/Private';

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
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Register></Register>,
      },
      {
        path: '/services',
        element: <Services></Services>,
        loader: async () => {
          return await fetch('http://localhost:5000/products/');
        },
      },
      {
        path: '/service/:id',
        element: <Service></Service>,
        loader: async ({ params }) => {
          return await fetch(`http://localhost:5000/products/${params.id}`);
        },
      },
      {
        path: '/reviews',
        element: (
          <Private>
            <MyReviews></MyReviews>
          </Private>
        ),
      },
      {
        path: '/edit',
        element: (
          <Private>
            <EditComment></EditComment>
          </Private>
        ),
      },
      {
        path: '/add',
        element: (
          <Private>
            <AddService></AddService>
          </Private>
        ),
      },
    ],
  },
  {
    path: '/*',
    element: <Error></Error>,
  },
]);

export default router;
