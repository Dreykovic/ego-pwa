import { useSelector } from 'react-redux';

import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { RootState } from '@/stores';

import HeaderActions from './header-actions';
import HeaderAvatar from './header-avatar';
import HeaderLeft from './header-left';
import HeaderLogo from './header-logo';
import HeaderTitle from './header-title';

function Header() {
  const { width } = useWindowDimensions();

  const { pageType } = useSelector((state: RootState) => state.header);

  return (
    <div className="navbar  bg-base-200 sticky lg:static right-0 top-0 bottom-0  z-10 shadow-md max-lg:rounded-b-3xl lg:border-0">
      {/* Menu toogle for mobile view or small screen */}
      <div
        className={` ${
          width >= 1024 || pageType === 'simple'
            ? 'navbar-start'
            : 'max-lg:flex-none'
        }`}
      >
        {width < 1024 ? (
          pageType === 'simple' ? (
            <HeaderLeft />
          ) : (
            <HeaderAvatar />
          )
        ) : (
          <HeaderLogo />
        )}
      </div>
      <div
        className={`${
          width >= 1024 || pageType === 'simple'
            ? 'navbar-center'
            : 'max-lg:flex-1'
        }`}
      >
        {pageType === 'simple' ? <HeaderTitle /> : ''}
      </div>
      <div
        className={`${
          width >= 1024 || pageType === 'simple'
            ? 'navbar-end'
            : 'max-lg:flex-none'
        } gap-2`}
      >
        {/* Notification icon */}
        <HeaderActions />
      </div>
    </div>
  );
}

export default Header;
