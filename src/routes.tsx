import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { LoginLayout } from './layouts';
import { Material } from './pages/Materials';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';

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
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/home', 
        element: <Home />,
      },
      {
        path: '/material', 
        element: <Material />,
      },
    ],
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
