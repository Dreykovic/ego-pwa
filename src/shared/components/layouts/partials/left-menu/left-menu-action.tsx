import { Cog8ToothIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import privateRoutes from '@/routes/private-routes';
import { RootState } from '@/stores';

export default function LeftMenuActons() {
  const { pageTitle } = useSelector((state: RootState) => state.header);
  return (
    <>
      <ul className="menu">
        <li>
          <Link
            to={privateRoutes.home.path}
            className="tooltip tooltip-right"
            data-tip="Home"
          >
            <div className=" w-10 ">
              <HomeIcon
                className={pageTitle === 'Home' ? 'text-primary' : ''}
              />

              {}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={privateRoutes.profile.path}
            className="tooltip tooltip-right"
            data-tip="Profile"
          >
            <div className=" w-10 ">
              <Cog8ToothIcon
                className={pageTitle === 'Profile' ? 'text-primary' : ''}
              />

              {}
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}
