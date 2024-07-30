// All components mapping with path for internal routes

import { lazy } from 'react';

import { RoutesConfigType } from '@/shared/types/routes-type';

const InternationalTransferPage = lazy(
  () => import('@/features/international-transfer'),
);

const internationalTransferRoutes: RoutesConfigType = {
  intlTransfer: {
    path: '/international-transfer', // the url
    component: <InternationalTransferPage />, // view rendered
    pageName: 'Intl',
  },
};

export default internationalTransferRoutes;
