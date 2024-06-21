import publicRoutes from '@/app/layouts/public-layout/public-routes';
import AppRoutes from '@/app/routes';

const GuestPageContent: React.FC = () => {
  return <AppRoutes routes={publicRoutes}></AppRoutes>;
};

export default GuestPageContent;
