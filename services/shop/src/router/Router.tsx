import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { UserCard } from '@packages/shared/src/components/UserCard';
import { App } from '@/components/App';
import { Shop } from '@/pages/shop';

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: (
          <Suspense fallback={'Loading...'}>
            <Shop />
          </Suspense>
        )
      },
      {
        path: '/shop/second',
        element: (
          <Suspense fallback={'Loading...'}>
            <h2>Second page</h2>
            <UserCard username={'from shop...'} />
          </Suspense>
        )
      }
    ]
  }
];

export const router = createBrowserRouter(routes);

export default routes;