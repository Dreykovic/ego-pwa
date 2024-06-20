import { themeChange } from 'theme-change';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BellIcon from '@heroicons/react/24/outline/BellIcon';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import { AppDispatch, RootState } from '@/shared/stores/store';
import { RIGHT_DRAWER_TYPES } from '@/shared/utils/global-constant-util';
import { openRightDrawer } from '@/shared/components/right-drawer/right-drawer-slice';
import {
  DARK_THEME,
  DEFAULT_THEME,
} from '@/shared/utils/themes-constant-utils';

function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const { noOfNotifications, pageTitle } = useSelector(
    (state: RootState) => state.header,
  );

  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme'),
  );

  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setCurrentTheme(DARK_THEME);
      } else {
        setCurrentTheme(DEFAULT_THEME);
      }
    }
    // 👆 false parameter is required for react project
  }, []);

  // Opening right sidebar for notification
  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: 'Notifications',
        bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
      }),
    );
  };

  // function logoutUser() {
  //   localStorage.clear();
  //   window.location.href = "/";
  // }

  return (
    <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">
      {/* Menu toogle for mobile view or small screen */}
      <div className="navbar-start">
        <label
          htmlFor="left-sidebar-drawer"
          className="btn btn-ghost drawer-button"
        >
          <Bars3Icon className="h-5 inline-block w-5" />
        </label>
      </div>
      <div className="navbar-center">
        {' '}
        <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
      </div>
      <div className="navbar-end">
        {/* Notification icon */}
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
      </div>
    </div>
  );
}

export default Header;
