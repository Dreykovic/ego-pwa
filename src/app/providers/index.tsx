import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicLayout from '@/app/layouts/public-layout';
import PrivateLayout from '@/app/layouts/private-layout';
import { RootState } from '@/shared/stores/store';
import { useSelector } from 'react-redux';

const AppProvider: React.FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.rightDrawer);

  const isAuthenticated = isAuth;
  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/*" element={<PrivateLayout />} />
      ) : (
        <Route path="/*" element={<PublicLayout />} />
      )}
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />}
      />
    </Routes>
  );
};

export default AppProvider;
