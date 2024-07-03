import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

import { RootState } from '@/stores';

export default function LeftMenuAvatar() {
  const { authUser } = useSelector((state: RootState) => state.auth);

  return (
    <div
      className="avatar mx-5 text-2xl font-semibold tooltip tooltip-right"
      data-tip={`${authUser?.lastname} ${authUser?.firstname}`}
    >
      <div className="w-8 h-8 rounded-full ring ring-ternary ring-offset-base-100 ring-offset-2 ">
        <UserCircleIcon />
      </div>
    </div>
  );
}
