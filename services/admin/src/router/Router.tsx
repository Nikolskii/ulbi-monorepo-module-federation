import { App } from '@/components/App';
import { Suspense } from 'react';
import { LazyAbout } from '@/pages/about/About.lazy';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        path: '/admin/about',
        element: (
          <Suspense fallback={'Loading...'}>
            <LazyAbout />
          </Suspense>
        )
      }
    ]
  }
];

export const router = createBrowserRouter(routes);

export default routes;