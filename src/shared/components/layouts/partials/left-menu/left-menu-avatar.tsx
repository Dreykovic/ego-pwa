import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';
// TODO: Factoriser les menus
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import privateRoutes from '@/routes/private-routes';
import { RootState } from '@/stores';

export default function LeftMenuAvatar() {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const { pageTitle } = useSelector((state: RootState) => state.header);

  return (
    <>
      <ul className="flex flex-col items-center justify-between">
        <li>
          <Link
            to={privateRoutes.profile.path}
            className={`tooltip tooltip-right p-1 pr-3  ${pageTitle === 'Profile' ? 'text-primary border-r-4 bg-ternary' : ''}`}
            data-tip="Profile"
          >
            <div className=" w-10 ">
              <Cog8ToothIcon />

              {}
            </div>
          </Link>
        </li>
        <li>
          <div
            className="avatar text-2xl font-semibold tooltip tooltip-right mt-3 p-1 pr-3"
            data-tip={`${authUser?.lastname} ${authUser?.firstname}`}
          >
            <div className="w-8 h-8 rounded-full ring ring-ternary ring-offset-base-100 ring-offset-2 ">
              <UserCircleIcon />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
