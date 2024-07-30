// All components mapping with path for internal routes

import { lazy } from 'react';

import { RoutesConfigType } from '@/shared/types/routes-type';

const CardsPage = lazy(() => import('@/features/cards'));

const cardsRoutes: RoutesConfigType = {
  cards: {
    path: '/cards', // the url
    component: <CardsPage />, // view rendered
    pageName: 'Cards',
  },
};

export default cardsRoutes;
