import { XCircleIcon } from '@heroicons/react/24/outline';

export interface IErrorAlertProps {
  message?: string;
}

export default function ErrorAlert(props: IErrorAlertProps) {
  return (
    <div
      role="alert"
      className="alert  alert-error my-2 lg:w-[400px] md:w-[400px] sm:w-[300px]  max-sm:w-[270px] max-sm:flex max-sm:items-center"
    >
      <XCircleIcon className="w-6 h-6" />
      <span>{props.message ?? 'Erreur ! Vérifiez les informations'}</span>
    </div>
  );
}
