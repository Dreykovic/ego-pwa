import BottomNavigation from './bottom-navigation';
import navs from './navs';

export interface IAppProps {
  position: 'header' | 'bottom';
}

export default function Navigations(props: IAppProps) {
  switch (props.position) {
    case 'bottom':
      return <BottomNavigation navs={navs} />;

    default:
      return <BottomNavigation navs={navs} />;
  }
}
