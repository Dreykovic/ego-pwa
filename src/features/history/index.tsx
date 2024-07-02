import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import History from '@/shared/components/common/history';
import {
  setPageTitle,
  setPageType,
} from '@/shared/components/layouts/partials/header/header-slice';
import GlobalPrivateLayout from '@/shared/components/layouts/private-layouts/global';
import Subtitle from '@/shared/components/ui/Typography/subtitle';
import { AppDispatch } from '@/stores';

const MobileHistory: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setPageTitle({ title: 'history' }));
    dispatch(setPageType({ type: 'simple' }));
  }, [dispatch]);

  return (
    <GlobalPrivateLayout>
      <div
        className={`grid max-sm:grid-cols-1  md:grid-cols-1  relative mt-6 bg-neutral px-3 `}
        style={{ height: '100%' }}
      >
        <div
          className={`w-full max-sm:border-t-2 max-sm:border-l-0 md:border-t-2 md:border-l-0 lg:border-t-0 lg:border-l-2 border-base-300 pl-3  overflow-y-hidden  `}
        >
          <div className="my-2 text-base-300 shadow-md flex justify-between">
            <Subtitle className="">{'Historique'}</Subtitle>
          </div>
          <History />
        </div>
      </div>
    </GlobalPrivateLayout>
  );
};

export default MobileHistory;
