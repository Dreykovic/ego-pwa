import LeftMenuActons from './left-menu-action';
import LeftMenuAvatar from './left-menu-avatar';

type Props = {
  className?: string;
};
const LeftMenu = (props: Props) => {
  return (
    <div
      className={`h-screen flex flex-col items-center justify-end max-laptop:hidden gap-5 bg-base-200 py-10  ${props.className}`}
    >
      <LeftMenuActons />
      <LeftMenuAvatar />
    </div>
  );
};

export default LeftMenu;
