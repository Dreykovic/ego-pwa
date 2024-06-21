// All components mapping with path for internal routes

import homeRoutes from '@/features/home/routes';
import { RoutesConfigType } from '@/shared/types/routes-type';

const privateRoutes: RoutesConfigType = {
  ...homeRoutes,
};

export default privateRoutes;
