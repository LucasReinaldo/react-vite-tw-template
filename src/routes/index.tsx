import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import ErrorPage from '@/pages/404';

export interface Router extends ReturnType<typeof createBrowserRouter> {}

const router: Router = createBrowserRouter([
  // 404 page
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

export default router;
