import { Link, Outlet } from 'react-router-dom';
import { aboutRoutes } from '@packages/shared/src/routes/about';
import { shopRoutes } from '@packages/shared/src/routes/shop';

export const App = () => {
  return (
    <div>
      <h1>Host Page (app component)</h1>
      <Link to={aboutRoutes.about}>Go to About</Link>
      <br />
      <Link to={shopRoutes.main}>Go to Shop</Link>
      <Outlet />
    </div>
  );
};