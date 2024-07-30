import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPageTitle } from '@/shared/components/layouts/partials/header/header-slice';
import Subtitle from '@/shared/components/ui/Typography/subtitle';
import { AppDispatch } from '@/stores';

import Cards from './components/cards';

const CardsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setPageTitle({ title: 'Cards' }));
    // dispatch(setPageType({ type: 'main' }));
  }, [dispatch]);
  return (
    <>
      {/* {contentHeight} /{height} /{rect?.top} */}
      <div className="my-2 text-base-300 shadow-md">
        <Subtitle className="">Cards</Subtitle>
      </div>
      <Cards />
    </>
  );
};

export default CardsPage;
