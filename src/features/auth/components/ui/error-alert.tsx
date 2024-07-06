import { XCircleIcon } from '@heroicons/react/24/outline';

export interface IErrorAlertProps {
  message?: string;
}

export default function ErrorAlert(props: IErrorAlertProps) {
  return (
    <div
      role="alert"
      className="alert  alert-error my-2 laptop:w-[400px] tablet:w-[400px] mobile:w-[300px]  max-mobile:w-[270px] max-mobile:flex max-mobile:items-center"
    >
      <XCircleIcon className="w-6 h-6" />
      <span>{props.message ?? 'Erreur ! Vérifiez les informations'}</span>
    </div>
  );
}
