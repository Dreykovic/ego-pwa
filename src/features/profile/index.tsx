import {
  ChevronRightIcon,
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
  UserGroupIcon,
  IdentificationIcon,
  KeyIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setPageTitle,
  setPageType,
} from '@/shared/components/layouts/partials/header/header-slice';
import MainPrivateLayout from '@/shared/components/layouts/private-layouts/main';
import SimplePrivateLayout from '@/shared/components/layouts/private-layouts/simple';
import Subtitle from '@/shared/components/ui/Typography/subtitle';
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { AppDispatch, RootState } from '@/stores';
import { makeGlobalLogout } from '@/stores/auth-slice';

const ProfileContent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { authUser } = useSelector((state: RootState) => state.auth);
  const leftIconsClass = 'w-8 h-8';
  const rightIconsClass = 'w-4 h-4';
  useEffect(() => {
    dispatch(setPageTitle({ title: 'Profile' }));
    dispatch(setPageType({ type: 'simple' }));
  }, [dispatch]);
  const logout = () => {
    dispatch(makeGlobalLogout());
  };
  return (
    <div className="lg:h-full overflow-auto">
      <div className="p-4 text-base-300">
        <div className="flex flex-col items-center gap-4">
          <div className="avatar h-full">
            <div className="w-24 rounded-full h-24">
              {/* <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                loading="lazy"
              /> */}
              <UserCircleIcon />
            </div>
          </div>

          <div>
            <Subtitle className="text-base-300">
              {`${authUser?.lastname} ${authUser?.firstname}`}
            </Subtitle>
          </div>
        </div>
      </div>
      <div className="p-5 text-ternary-content">
        <div className=" grid grid-flow-row-dense">
          <div className="flex items-center justify-between p-4 rounded-t-xl bg-ternary ">
            <div className="flex items-center  gap-10">
              <UserCircleIcon className={leftIconsClass} />
              <h1>Compte</h1>
            </div>
            <button className="">
              <ChevronRightIcon className={`${rightIconsClass}`} />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border-t-2 bg-ternary">
            <div className="flex items-center  gap-10">
              <KeyIcon className={leftIconsClass} />
              <h1>Changer Mot De Passe</h1>
            </div>
            <button className="">
              <ChevronRightIcon className={`${rightIconsClass}`} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-5 text-ternary-content">
        <div className=" grid grid-flow-row-dense">
          <div className="flex items-center justify-between p-4 rounded-t-xl bg-ternary">
            <div className="flex items-center  gap-10">
              <IdentificationIcon className={leftIconsClass} />
              <h1>Vérification KYC</h1>
            </div>
            <button className="">
              <ChevronRightIcon className={`${rightIconsClass}`} />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border-t-2 rounded-b-xl bg-ternary">
            <div className="flex items-center  gap-10">
              <UserGroupIcon className={leftIconsClass} />
              <h1>Parrainage et gains</h1>
            </div>
            <button className="">
              <ChevronRightIcon className={`${rightIconsClass}`} />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border-t-2 rounded-b-xl bg-ternary ">
            <div className="flex items-center  gap-10">
              <InformationCircleIcon className={leftIconsClass} />
              <h1>Contacter le support</h1>
            </div>
            <button className="" onClick={logout}>
              <ChevronRightIcon className={`${rightIconsClass}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 text-ternary-content">
        <div className=" grid grid-flow-row-dense">
          <div className="flex items-center justify-between p-4 border-t-2 rounded-b-xl bg-ternary text-error">
            <div className="flex items-center  gap-10">
              <ArrowRightStartOnRectangleIcon className={leftIconsClass} />
              <h1>Déconnexion</h1>
            </div>
            <button className="" onClick={logout}>
              <ChevronRightIcon className={`${rightIconsClass}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Profile: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {width >= 1024 ? (
        <MainPrivateLayout>
          <ProfileContent />
        </MainPrivateLayout>
      ) : (
        <SimplePrivateLayout>
          <ProfileContent />
        </SimplePrivateLayout>
      )}
    </>
  );
};

export default Profile;
