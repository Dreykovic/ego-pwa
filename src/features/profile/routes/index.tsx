// All components mapping with path for internal routes

import { lazy } from 'react';

import { RoutesConfigType } from '@/shared/types/routes-type';

const Profile = lazy(() => import('@/features/profile'));

const profileRoutes: RoutesConfigType = {
  profile: {
    path: '/profile', // the url
    component: <Profile />, // view rendered
    pageName: 'Profile',
  },
};

export default profileRoutes;
