import { useSelector } from 'react-redux';

import { RootState } from '@/stores';

export default function LeftMenuAvatar() {
  const { authUser } = useSelector((state: RootState) => state.auth);

  return (
    <div
      className="avatar mx-5 text-2xl font-semibold tooltip tooltip-right"
      data-tip={`${authUser?.lastname} ${authUser?.firstname}`}
    >
      <div className="w-8 rounded-full ring ring-ternary ring-offset-base-100 ring-offset-2 ">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
  );
}
