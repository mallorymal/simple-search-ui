import './App.scss';
import About from './pages/About';
import Home from './pages/Home';
import Anime from './pages/Anime';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <div>Error</div>,
    },
    {
      path: '/home',
      element: <Home />,
      errorElement: <div>Error</div>,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'anime/:id',
      element: <Anime />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
