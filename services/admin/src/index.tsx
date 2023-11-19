import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from '@/components/App';
import { LazyAbout } from '@/pages/about/About.lazy';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container not found');
}

const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={'Loading...'}>
            <LazyAbout />
          </Suspense>
        )
      }
    ]
  }
]);

root.render(
  <RouterProvider router={router} />
);