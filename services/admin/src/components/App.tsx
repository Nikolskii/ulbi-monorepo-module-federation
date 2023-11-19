import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <h1>Page</h1>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <Outlet />
    </div>
  );
};