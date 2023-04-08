import { Component, ErrorBoundary, lazy } from 'solid-js';
import { RouteDefinition, Router, useRoutes } from '@solidjs/router';
import { Header } from './components/Header';

const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/Home')),
  },
  {
    path: '/home',
    component: lazy(() => import('./pages/Home')),
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/About')),
  },
  {
    path: '/anime/:id',
    component: lazy(() => import('./pages/Home')),
  },
];
const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <ErrorBoundary fallback={(err) => err}>
        <Header />
        <div class='container'>
          <Routes />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
