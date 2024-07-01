import useWindowDimensions from '@/shared/hooks/use-window-dimensions';

import Navigations from '../navigations';

import HeaderActions from './header-actions';
import HeaderAvatar from './header-avatar';
import HeaderLogo from './header-logo';

function Header() {
  const { width } = useWindowDimensions();

  return (
    <div className="navbar  bg-base-200 sticky lg:static right-0 top-0 bottom-0  z-10 shadow-md max-lg:rounded-b-3xl lg:border-0">
      {/* Menu toogle for mobile view or small screen */}
      <div className="max-lg:flex-none  lg:navbar-start">
        {width < 1024 ? <HeaderAvatar /> : <HeaderLogo />}
      </div>
      <div className=" max-lg:flex-1  lg:navbar-center ">
        {width < 1024 ? <Navigations position="header" /> : ''}
      </div>
      <div className=" max-lg:flex-none  lg:navbar-end gap-2">
        {/* Notification icon */}
        <HeaderActions />
      </div>
    </div>
  );
}

export default Header;
