import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/stores';
import { resetGlobalMessage } from '@/stores/message-slice';

export interface IAlertProps {
  message?: string;
  type: 'SUCCESS' | 'ERROR';
}

export default function Alert(props: IAlertProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [isVisible, setIsVisible] = useState(true);

  const resetMessage = () => {
    dispatch(resetGlobalMessage());
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
  return (
    <div
      role="alert"
      className={`alert  alert-${props.type === 'SUCCESS' ? 'success' : 'error'} my-2 laptop:w-[400px] tablet:w-[400px] mobile:w-[300px]  max-mobile:w-[270px] max-mobile:flex max-mobile:items-center`}
    >
      {props.type === 'SUCCESS' ? (
        <>
          <CheckCircleIcon className="w-6 h-6" />
          <span>
            {props.message ?? 'Succès ! opération effectuée avec succès'}
          </span>
        </>
      ) : (
        <>
          <XCircleIcon className="w-6 h-6" />
          <span>{props.message ?? 'Erreur ! Vérifiez les informations'}</span>
        </>
      )}
      <div
        role="button"
        className="btn btn-ghost ml-auto mr-2"
        onClick={resetMessage}
      >
        <XMarkIcon className="w-6 h-6" />
      </div>
    </div>
  );
}
