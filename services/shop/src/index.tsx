import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from '@/components/App';
import { Shop } from '@/pages/shop';

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
        path: '/shop',
        element: (
          <Suspense fallback={'Loading...'}>
            <Shop />
          </Suspense>
        )
      }
    ]
  }
]);

root.render(
  <RouterProvider router={router} />
);