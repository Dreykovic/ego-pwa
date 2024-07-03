import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';

import {
  setPageTitle,
  setPageType,
} from '@/shared/components/layouts/partials/header/header-slice';
const Subtitle = lazy(
  () => import('@/shared/components/ui/Typography/subtitle'),
);
import { AppDispatch } from '@/stores';

const Services = lazy(() => import('./components/services'));

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setPageTitle({ title: 'Home' }));
    dispatch(setPageType({ type: 'main' }));
  }, [dispatch]);
  return (
    <>
      {/* {contentHeight} /{height} /{rect?.top} */}
      <div className="my-2 text-base-300 shadow-md">
        <Subtitle className="">Services</Subtitle>
      </div>
      <Services />
    </>
  );
};

export default Home;
