import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { Signup } from '../pages/Signup';
import { Signin } from '../pages/Signin';
import { CurriculumLayout } from './CurriculumLayout';
import MainBody from '../components/MainBody';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/signup', element: <Signup /> },
      { path: '/signin', element: <Signin /> },
    ],
  },
  {
    path: '/curriculum-detail',
    element: <CurriculumLayout />,
    children: [
      { index: true, element: <MainBody /> },
    ],
  },
]);
