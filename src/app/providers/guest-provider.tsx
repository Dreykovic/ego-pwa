import React from 'react';

import AppRoutes from '@/routes';
import publicRoutes from '@/routes/public-routes';
import GlobalPublicLayout from '@/shared/components/layouts/public-layouts/global';

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
