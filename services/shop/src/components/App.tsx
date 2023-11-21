import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <h1>Micro-frontend "Shop"</h1>
      <Outlet />
    </div>
  );
};