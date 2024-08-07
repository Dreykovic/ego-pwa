// All components mapping with path for internal routes

import { lazy } from 'react';

import { RoutesConfigType } from '@/shared/types/routes-type';

const MobileHistory = lazy(() => import('@/features/mobile-history'));

const historyRoutes: RoutesConfigType = {
  history: {
    path: '/historique', // the url
    component: <MobileHistory />, // view rendered,
    pageName: 'Mobile',
  },
};

export default historyRoutes;
