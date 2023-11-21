import { App } from '@/components/App';
import { Suspense } from 'react';
import { LazyAbout } from '@/pages/about/About.lazy';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/about',
    element: <App />,
    children: [
      {
        path: '/about/main',
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