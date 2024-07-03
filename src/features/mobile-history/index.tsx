import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const History = lazy(() => import('@/shared/components/common/history'));
import {
  setPageTitle,
  setPageType,
} from '@/shared/components/layouts/partials/header/header-slice';
const Subtitle = lazy(
  () => import('@/shared/components/ui/Typography/subtitle'),
);
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
import { AppDispatch } from '@/stores';

const MobileHistory: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  useEffect(() => {
    if (width >= 1024) {
      navigate('/');
    }
    dispatch(setPageTitle({ title: 'Historique' }));
    dispatch(setPageType({ type: 'simple' }));
  }, [dispatch, navigate, width]);

  return (
    <>
      <div className="p-4">
        <div className="my-2 text-base-300 shadow-md flex justify-between">
          <Subtitle className="">{'Historique'}</Subtitle>
        </div>
        <History />
      </div>
    </>
  );
};

export default MobileHistory;
