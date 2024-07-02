import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  setPageTitle,
  setPageType,
} from '@/shared/components/layouts/partials/header/header-slice';
import MainPrivateLayout from '@/shared/components/layouts/private-layouts/main';
import SimplePrivateLayout from '@/shared/components/layouts/private-layouts/simple';
import Subtitle from '@/shared/components/ui/Typography/subtitle';
import useWindowDimensions from '@/shared/hooks/use-window-dimensions';
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
  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Transfert' }));
    dispatch(setPageType({ type: 'simple' }));
  }, [dispatch]);

  return (
    <>
      {width >= 1024 ? (
        <MainPrivateLayout>
          <TransferForm />
        </MainPrivateLayout>
      ) : (
        <SimplePrivateLayout>
          <TransferForm />
        </SimplePrivateLayout>
      )}
    </>
  );
};

export default CrossTransfer;
