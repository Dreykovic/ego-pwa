import { AppDispatch, RootState } from '@/stores';

import { useDispatch, useSelector } from 'react-redux';
import { openRightDrawer } from '../right-sidebar/right-drawer-slice';
import { RIGHT_DRAWER_TYPES } from '@/shared/utils/global-constant-util';
import { makeGlobalLogout } from '@/features/auth/stores/auth-slice';
import { BellIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';

export default function HeaderActions() {
  const dispatch = useDispatch<AppDispatch>();

  const { noOfNotifications } = useSelector((state: RootState) => state.header);
  // Opening right sidebar for notification
  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: 'Notifications',
        bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
      }),
    );
  };

  function logoutUser() {
    dispatch(makeGlobalLogout());
  }
  return (
    <>
      <button
        className="btn btn-ghost ml-4  btn-circle"
        onClick={() => openNotification()}
      >
        <div className="indicator">
          <BellIcon className="h-6 w-6" />
          {noOfNotifications > 0 ? (
            <span className="indicator-item badge badge-secondary badge-sm">
              {noOfNotifications}
            </span>
          ) : null}
        </div>
      </button>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <EllipsisVerticalIcon />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Parametres</a>
          </li>
          <li>
            <a onClick={logoutUser}>Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}
