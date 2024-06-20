import React from 'react';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import Logo from '@/assets/images/logo/logo-1.png';

import { NavLink } from 'react-router-dom';
import menus from './sidebar-menus';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/shared/stores/store';
import { setToken } from '@/shared/components/right-drawer/right-drawer-slice';

const LeftSidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const close = (): void => {
    const sidebarElement = document.getElementById('left-sidebar-drawer');
    if (sidebarElement) {
      sidebarElement.click();
    }
  };
  const logout = (): void => {
    dispatch(setToken({ token: false }));
  };

  return (
    <div className="drawer-side z-30">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
        <button
          className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute"
          onClick={close}
        >
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>
        <li className="mb-2 font-semibold text-xl">
          <a href="/">
            <img className="mask mask-squircle w-10" src={Logo} alt="ego" />
            Ego
          </a>
        </li>
        {menus.map((route, k) => {
          return (
            <li key={k + 'a'}>
              {
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`
                  }
                  onClick={logout}
                >
                  {route.icon} {route.name}
                  {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </NavLink>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
