import { NavType } from '@/shared/types/routes-type';

import { Link } from 'react-router-dom';
type Props = {
  navs: NavType[];
};
export default function HeaderNavs(props: Props) {
  return (
    <ul className="menu hidden  lg:menu-horizontal rounded-box">
      {props.navs.map((nav, k) => {
        return (
          <li key={k}>
            <Link
              to={nav.path}
              className={nav.label === 'home' ? 'active text-primary' : ''}
            >
              {nav.icon}
              {nav.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
