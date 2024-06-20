import RoutesProvider from '@/app/routes';
import guestRoutes from '@/app/layouts/public-layout/public-routes';

const GuestPageContent: React.FC = () => {
  return <RoutesProvider routes={guestRoutes}></RoutesProvider>;
};

export default GuestPageContent;
