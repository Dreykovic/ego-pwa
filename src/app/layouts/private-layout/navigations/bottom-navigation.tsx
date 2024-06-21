import { NavType } from '@/shared/types/routes-type';

type Props = {
  navs: NavType[];
};
const BottomNavigation = (props: Props) => {
  return (
    <div className="btm-nav lg:hidden">
      {props.navs.map((nav, k) => {
        return (
          <button
            className={nav.label === 'home' ? 'active text-primary' : ''}
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
