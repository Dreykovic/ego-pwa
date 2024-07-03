import React, { lazy } from 'react';

const AppRoutes = lazy(() => import('@/routes'));
import publicRoutes from '@/routes/public-routes';
const GlobalPublicLayout = lazy(
  () => import('@/shared/components/layouts/public-layouts/global'),
);

const GuestProvider: React.FC = () => {
  return (
    <>
      <GlobalPublicLayout>
        <AppRoutes routes={publicRoutes} />
      </GlobalPublicLayout>
    </>
  );
};
export default GuestProvider;
