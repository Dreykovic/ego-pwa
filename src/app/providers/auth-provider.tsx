import React, { lazy } from 'react';
import { useSelector } from 'react-redux';

const AppRoutes = lazy(() => import('@/routes'));
import privateRoutes from '@/routes/private-routes';
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { RootState } from '@/stores';
const MainPrivateLayout = lazy(
  () => import('@/shared/components/layouts/private-layouts/main'),
);
const SimplePrivateLayout = lazy(
  () => import('@/shared/components/layouts/private-layouts/simple'),
);

const AuthProvider: React.FC = () => {
  const { width } = useWindowDimensions();
  const { pageType } = useSelector((state: RootState) => state.header);
  return (
    <>
      {width >= 1024 || pageType === 'main' ? (
        <MainPrivateLayout>
          <AppRoutes routes={privateRoutes} />
        </MainPrivateLayout>
      ) : (
        <SimplePrivateLayout>
          <AppRoutes routes={privateRoutes} />
        </SimplePrivateLayout>
      )}
    </>
  );
};
export default AuthProvider;
