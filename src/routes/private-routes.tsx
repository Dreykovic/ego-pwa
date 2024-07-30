// All components mapping with path for internal routes
//TODO: rendre les routes nommé

import cardsRoutes from '@/features/cards/routes';
import crossTransferRoutes from '@/features/cross-transfer/routes';
import internationalTransferRoutes from '@/features/international-transfer/routes';
import historyRoutes from '@/features/mobile-history/routes';
import profileRoutes from '@/features/profile/routes';
import homeRoutes from '@/features/services/routes';
import { RoutesConfigType } from '@/shared/types/routes-type';

const privateRoutes: RoutesConfigType = {
  ...homeRoutes,
  ...historyRoutes,
  ...profileRoutes,
  ...internationalTransferRoutes,
  ...cardsRoutes,
  ...crossTransferRoutes,
};

export default privateRoutes;
