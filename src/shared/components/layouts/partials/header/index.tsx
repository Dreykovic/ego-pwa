import { lazy } from 'react';
import { useSelector } from 'react-redux';

import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { RootState } from '@/stores';

const HeaderActions = lazy(() => import('./header-actions'));
const HeaderAvatar = lazy(() => import('./header-avatar'));
const HeaderLeft = lazy(() => import('./header-left'));
const HeaderLogo = lazy(() => import('./header-logo'));
const HeaderTitle = lazy(() => import('./header-title'));

function Header() {
  const { width } = useWindowDimensions();

  const { pageType, pageTitle } = useSelector(
    (state: RootState) => state.header,
  );

  return (
    <div className="navbar max-h-4 bg-base-200 sticky lg:static right-0 top-0 bottom-0  z-10 shadow-md max-lg:rounded-b-2xl lg:border-0">
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
            pageTitle === 'Profile' || pageTitle === 'Historique' ? (
              ''
            ) : (
              <HeaderLeft />
            )
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
        {width >= 1024 || pageType === 'simple' ? <HeaderTitle /> : ''}
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
