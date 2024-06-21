import HeaderAvatar from './header-avatar';
import Navigations from '../navigations';
import HeaderActions from './header-actions';

function Header() {
  return (
    <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md rounded-b-3xl">
      {/* Menu toogle for mobile view or small screen */}
      <div className="max-lg:flex-none  lg:navbar-start">
        <HeaderAvatar />
      </div>
      <div className=" max-lg:flex-1  lg:navbar-center ">
        <Navigations position="header" />
      </div>
      <div className=" max-lg:flex-none  lg:navbar-end">
        {/* Notification icon */}
        <HeaderActions />
      </div>
    </div>
  );
}

export default Header;
