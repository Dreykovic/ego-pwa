import { lazy } from 'react';
const LeftMenuActons = lazy(() => import('./left-menu-action'));
const LeftMenuAvatar = lazy(() => import('./left-menu-avatar'));

type Props = {
  className?: string;
};
const LeftMenu = (props: Props) => {
  return (
    <div
      className={`h-screen flex flex-col items-center justify-end max-lg:hidden gap-5 bg-base-200 py-10  ${props.className}`}
    >
      <LeftMenuActons />
      <LeftMenuAvatar />
    </div>
  );
};

export default LeftMenu;
