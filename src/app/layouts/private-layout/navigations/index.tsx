import BottomNavigation from './bottom-navigation';
import HeaderNavs from './header-navs';
import navs from './navs';

export interface IAppProps {
  position: 'header' | 'bottom';
}

export default function Navigations(props: IAppProps) {
  switch (props.position) {
    case 'bottom':
      return <BottomNavigation navs={navs} />;
    case 'header':
      return <HeaderNavs />;

    default:
      break;
  }
}
