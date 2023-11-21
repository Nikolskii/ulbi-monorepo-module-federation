import { Link } from 'react-router-dom';
import { shopRoutes } from '@packages/shared/src/routes/shop';

const Shop = () => {
  return (
    <div>
      <h1>Shop component</h1>
      <Link to={shopRoutes.second}>Go to second page</Link>
    </div>
  );
};

export default Shop;