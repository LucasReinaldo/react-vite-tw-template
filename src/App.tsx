import { RouterProvider } from 'react-router-dom';
import { AppContext } from './contexts/AppContext';
import router from './routes';

function App() {
  return (
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  );
}

export default App;
