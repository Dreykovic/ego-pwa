import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { ReactNode } from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';

import ErrorAlert from '../ui/error-alert';

type Props<T extends FieldValues> = {
  children: ReactNode;
  title: string;
  onSubmit: SubmitHandler<T>;
  globalErrorMsg?: string;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
  handleSubmit: UseFormHandleSubmit<T>;
  bottomchildren?: ReactNode;
  formClassNames?: string;
  submitBtnText?: string;
};

const WithAuth = <T extends FieldValues>(props: Props<T>) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-sm:py-1 py-6 px-5 max-sm:px-1 rounded-md">
        <div className="text-base-content">
          <div className="max-sm:mb-3 mb-8 flex flex-col items-center">
            <div className="flex flex-col mx-10 my-0 items-center justify-center text-2xl">
              <h3 className="uppercase">{props.title}</h3>
            </div>
          </div>
          <form
            onSubmit={props.handleSubmit(props.onSubmit)}
            className={
              props.formClassNames ??
              'flex flex-col items-center justify-center'
            }
          >
            {props.error && <ErrorAlert message={props.globalErrorMsg} />}
            {props.children}
            <div className="my-4 flex justify-center">
              <button className="btn btn-neutral px-10 py-2" type="submit">
                {props.isLoading ? (
                  <span className="loading loading-dots xs:loading-xs sm:loading-sm md:loading-md lg:loading-lg"></span>
                ) : props.submitBtnText ? (
                  props.submitBtnText
                ) : (
                  'Continuer'
                )}
              </button>
            </div>
            {props.bottomchildren}
          </form>
        </div>
      </div>
    </div>
  );
};

export default WithAuth;
