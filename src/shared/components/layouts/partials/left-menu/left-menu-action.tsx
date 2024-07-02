import { Cog8ToothIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import privateRoutes from '@/routes/private-routes';
import { RootState } from '@/stores';

export default function LeftMenuActons() {
  const { pageTitle } = useSelector((state: RootState) => state.header);
  return (
    <>
      <Link to={privateRoutes.home.path}>
        <button className="btn btn-circle btn-ghost w-10 rounded-full">
          <HomeIcon className={pageTitle === 'Home' ? 'text-primary' : ''} />

          {}
        </button>
      </Link>
      <Link to={privateRoutes.profile.path}>
        <button className="btn btn-circle btn-ghost w-10 rounded-full">
          <Cog8ToothIcon
            className={pageTitle === 'Profile' ? 'text-primary' : ''}
          />

          {}
        </button>
      </Link>
    </>
  );
}
