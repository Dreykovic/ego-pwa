import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PrivateLayout from '@/app/layouts/private-layout';
import PublicLayout from '@/app/layouts/public-layout';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores';

const AppProvider: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

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
