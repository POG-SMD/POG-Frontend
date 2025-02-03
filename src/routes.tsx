import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { LoginLayout } from './layouts';
import { Material } from './pages/Materials';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { CollectData } from './pages/CollectData';
import { Reunion } from './pages/Reunion';
import { Admin } from './pages/Admin';
import { Equipments } from './pages/Equipments';
import { PrivateAuth } from './components/common/PrivateAuth';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LoginLayout />,
    children: [
      {
        path: '/', 
        element: <Login />,
      },
      {
        path: '/sign-in', 
        element: <Login />,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
];

const privateRoutes: RouteObject[] = [
  
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
      {
        path: '/data', 
        element: <CollectData />,
      },
      {
        path: '/reunion', 
        element: <Reunion />,
      },
      {
        path: '/admin', 
        element: <Admin />,
      },
      {
        path: '/equipment', 
        element: <Equipments />,
      },
    ],
  },
]

const routesList: RouteObject[] = [
  {
    element: <PrivateAuth />,
    children: privateRoutes,
  },
  ...publicRoutes,
]

export const routes = createBrowserRouter(routesList)
