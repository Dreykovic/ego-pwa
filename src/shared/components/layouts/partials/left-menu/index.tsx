import LeftMenuActons from './left-menu-action';
import LeftMenuAvatar from './left-menu-avatar';

type Props = {
  className?: string;
};
const LeftMenu = (props: Props) => {
  return (
    <div
      className={`h-screen flex flex-col items-start pl-2 justify-between max-laptop:hidden gap-5 bg-base-200 py-10  ${props.className}`}
    >
      <div>
        <LeftMenuActons />
      </div>
      <div>
        <LeftMenuAvatar />
      </div>
    </div>
  );
};

export default LeftMenu;
