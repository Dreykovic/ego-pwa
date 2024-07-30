import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  setPageTitle,
  setPageType,
} from '@/shared/components/layouts/partials/header/header-slice';
import Subtitle from '@/shared/components/ui/Typography/subtitle';
import { AppDispatch } from '@/stores';

const TransferForm = () => {
  return (
    <div>
      <div className="my-2 text-base-300 shadow-md flex justify-between">
        <Subtitle className="">{'Transfert'}</Subtitle>
      </div>

      <form action="">FOFOFOFO</form>
    </div>
  );
};

const CrossTransfer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Transfer' }));
    dispatch(setPageType({ type: 'simple' }));
  }, [dispatch]);

  return (
    <>
      <TransferForm />
    </>
  );
};

export default CrossTransfer;
