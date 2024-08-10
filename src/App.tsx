import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import router from './routes';

function App() {
  return (
    <SWRConfig>
      <RouterProvider router={router} />
    </SWRConfig>
  );
}

export default App;
