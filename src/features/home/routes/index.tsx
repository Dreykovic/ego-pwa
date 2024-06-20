// All components mapping with path for internal routes

import { RoutesConfigType } from '@/shared/types/routes-type';
import { lazy } from 'react';

const Home = lazy(() => import('@/features/home'));

const homeRoutes: RoutesConfigType = {
  home: {
    path: '/', // the url
    component: <Home />, // view rendered
  },
};

export default homeRoutes;
