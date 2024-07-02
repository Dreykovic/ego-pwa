import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import History from '@/shared/components/common/history';
import {
  setPageTitle,
  setPageType,
} from '@/shared/components/layouts/partials/header/header-slice';
import SimplePrivateLayout from '@/shared/components/layouts/private-layouts/simple';
import Subtitle from '@/shared/components/ui/Typography/subtitle';
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { AppDispatch } from '@/stores';

const MobileHistory: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  if (width >= 1024) {
    navigate('/');
  }
  useEffect(() => {
    dispatch(setPageTitle({ title: 'Historique' }));
    dispatch(setPageType({ type: 'simple' }));
  }, [dispatch]);

  return (
    <SimplePrivateLayout>
      <div className="p-4">
        <div className="my-2 text-base-300 shadow-md flex justify-between">
          <Subtitle className="">{'Historique'}</Subtitle>
        </div>
        <History />
      </div>
    </SimplePrivateLayout>
  );
};

export default MobileHistory;
