// All components mapping with path for internal routes

import authRoutes from '@/features/auth/routes';
import { RoutesConfigType } from '@/shared/types/routes-type';

const guestRoutes: RoutesConfigType = {
  ...authRoutes,
};

export default guestRoutes;
