// All components mapping with path for internal routes
//TODO: rendre les routes nommé
import historyRoutes from '@/features/history/routes';
import homeRoutes from '@/features/home/routes';
import { RoutesConfigType } from '@/shared/types/routes-type';

const privateRoutes: RoutesConfigType = {
  ...homeRoutes,
  ...historyRoutes,
};

export default privateRoutes;
