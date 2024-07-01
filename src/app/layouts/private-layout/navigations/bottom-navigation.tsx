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
            className={nav.label === 'Profile' ? '  border-0 text-primary' : ''}
            key={k}
          >
            {nav.icon}

            <span className="btm-nav-label">{nav.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
