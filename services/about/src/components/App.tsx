import { Outlet } from 'react-router-dom';
import { deepMerge } from '@packages/shared/src/utils/deepMerge';
import { UserCard } from '@packages/shared/src/components/UserCard';

export const App = () => {
  deepMerge();

  return (
    <div>
      <h1>Micro-frontend "About" (app component)</h1>
      <Outlet />
      <UserCard username={'user from "about"'} />
    </div>
  );
};