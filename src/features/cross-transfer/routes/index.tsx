// All components mapping with path for internal routes

import { lazy } from 'react';

import { RoutesConfigType } from '@/shared/types/routes-type';

const CrossTransfer = lazy(() => import('@/features/cross-transfer'));

const crossTransferRoutes: RoutesConfigType = {
  crossTransfer: {
    path: '/cross-transfer', // the url
    component: <CrossTransfer />, // view rendered
    pageName: 'Cross',
  },
};

export default crossTransferRoutes;
