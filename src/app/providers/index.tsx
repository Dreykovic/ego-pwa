import React, { lazy } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/stores';

const AuthProvider = lazy(() => import('@/app/providers/auth-provider'));
const GuestProvider = lazy(() => import('@/app/providers/guest-provider'));
const AppProvider: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return <div>{isAuthenticated ? <AuthProvider /> : <GuestProvider />}</div>;
};

export default AppProvider;
