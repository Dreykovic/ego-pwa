import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  setPageTitle,
  setPageType,
} from '@/shared/components/layouts/partials/header/header-slice';
import Subtitle from '@/shared/components/ui/Typography/subtitle';
import { AppDispatch } from '@/stores';

const InternationalTransferPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setPageTitle({ title: 'Intl' }));
    dispatch(setPageType({ type: 'main' }));
  }, [dispatch]);
  return (
    <>
      {/* {contentHeight} /{height} /{rect?.top} */}
      <div className="my-2 text-base-300 shadow-md">
        <Subtitle className="">Transfert International</Subtitle>
      </div>
    </>
  );
};

export default InternationalTransferPage;
