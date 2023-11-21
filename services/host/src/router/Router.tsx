import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App';
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import aboutRoutes from 'about/Router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...shopRoutes,
      ...aboutRoutes
    ]
  }
]);