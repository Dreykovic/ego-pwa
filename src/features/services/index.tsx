import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  setPageTitle,
  setPageType,
} from '@/shared/components/layouts/partials/header/header-slice';
import MainPrivateLayout from '@/shared/components/layouts/private-layouts/main';
import Subtitle from '@/shared/components/ui/Typography/subtitle';
import { AppDispatch } from '@/stores';

import Services from './components/services';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setPageTitle({ title: 'Home' }));
    dispatch(setPageType({ type: 'main' }));
  }, [dispatch]);
  return (
    <MainPrivateLayout>
      {/* {contentHeight} /{height} /{rect?.top} */}
      <div className="my-2 text-base-300 shadow-md">
        <Subtitle className="">Services</Subtitle>
      </div>
      <Services />
    </MainPrivateLayout>
  );
};

export default Home;
