import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';

import { makeGlobalLogout } from '@/features/auth/stores/auth-slice';
import { AppDispatch } from '@/stores';

export default function LeftMenuActons() {
  const dispatch = useDispatch<AppDispatch>();

  function logoutUser() {
    dispatch(makeGlobalLogout());
  }
  return (
    <>
      <div className="dropdown dropdown-start dropdown-top ">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Cog8ToothIcon />
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
