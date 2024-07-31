import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import ErrorPage from '@/pages/404';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
