import { Link } from 'react-router-dom';

import { NavType } from '@/shared/types/routes-type';

type Props = {
  navs: NavType[];
};
const BottomNavigation = (props: Props) => {
  return (
    <div className="btm-nav lg:hidden bg-base-300 rounded-t-lg">
      {props.navs.map((nav, k) => {
        return (
          <button
            className={nav.label === 'Home' ? '  border-0 text-primary' : ''}
            key={k}
          >
            <Link to={'/history'} className="flex flex-col items-center">
              {nav.icon}

              <span className="btm-nav-label">{nav.label}</span>
            </Link>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
