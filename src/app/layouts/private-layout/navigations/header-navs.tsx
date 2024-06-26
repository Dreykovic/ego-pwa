import { useSelector } from 'react-redux';

import Title from '@/shared/components/Typography/title';
import { RootState } from '@/stores';

export default function HeaderNavs() {
  const { pageTitle } = useSelector((state: RootState) => state.header);
  return (
    <ul className="menu hidden  lg:menu-horizontal rounded-box">
      <Title className="">{pageTitle}</Title>
    </ul>
  );
}
