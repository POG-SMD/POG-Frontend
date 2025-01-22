import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { LoginLayout } from './layouts';
import { Material } from './pages/Materials';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LoginLayout />,
    children: [
      {
        path: '/', 
        element: <Login />,
      },
    ],
  },
  {
    path: '/table', 
    element: <Material />,
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
];

const routesList: RouteObject[] = [
  ...publicRoutes,
];

export const routes = createBrowserRouter(routesList);
