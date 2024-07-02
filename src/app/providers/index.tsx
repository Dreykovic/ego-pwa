import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import AppRoutes from '@/app/routes';
import privateRoutes from '@/app/routes/private-routes';
import publicRoutes from '@/app/routes/public-routes';
import { RootState } from '@/stores';

const AppProvider: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/*" element={<AppRoutes routes={privateRoutes} />} />
      ) : (
        <Route path="/*" element={<AppRoutes routes={publicRoutes} />} />
      )}
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />}
      />
    </Routes>
  );
};

export default AppProvider;
