import Navigations from '../navigations';

import HeaderActions from './header-actions';
import HeaderAvatar from './header-avatar';

function Header() {
  return (
    <div className="navbar  bg-base-200 sticky lg:static top-0 left-0  z-10 shadow-md rounded-b-3xl">
      {/* Menu toogle for mobile view or small screen */}
      <div className="max-lg:flex-none  lg:navbar-start">
        <HeaderAvatar />
      </div>
      <div className=" max-lg:flex-1  lg:navbar-center ">
        <Navigations position="header" />
      </div>
      <div className=" max-lg:flex-none  lg:navbar-end gap-2">
        {/* Notification icon */}
        <HeaderActions />
      </div>
    </div>
  );
}

export default Header;
