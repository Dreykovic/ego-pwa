// All components mapping with path for internal routes

import { lazy } from 'react';

import { RoutesConfigType } from '@/shared/types/routes-type';

const Home = lazy(() => import('@/features/home'));

const homeRoutes: RoutesConfigType = {
  home: {
    path: '/', // the url
    component: <Home />, // view rendered
  },
};

export default homeRoutes;
