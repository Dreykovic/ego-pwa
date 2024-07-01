import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input';
import env from '@/shared/config/env';

import { useRecoverEmailMutation } from '../../stores/auth-api';
import {
  FormValues,
  LoginEmailFormValues,
  LoginEmailSchema,
} from '../../types';

const LoginEmail: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginEmailFormValues>({
    resolver: zodResolver(LoginEmailSchema),
  });
  const { phoneNumber } = useParams();
  const [globalError, setGlobalError] = useState<string>();

  const [recoverEmail, { isLoading, error }] = useRecoverEmailMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginEmailFormValues> = (data) => {
    console.log(data);
    if (env.appState === 'demo') {
      navigate(env.appState != 'demo' ? '/auth/otp/:email' : '/auth/otp/');
      return;
    }
    if (!phoneNumber && env.appState != 'demo') {
      navigate('/login');
      return;
    }
    const userRecoverEmailVales: FormValues = {
      phoneNumber: phoneNumber as string,
      newEmail: data.email,
    };
    recoverEmail(userRecoverEmailVales)
      .unwrap()
      .then((payload) => {
        console.log('fulfilled', payload);
        switch (payload.content.code) {
          case 'OTP_SUSSCESSFULLY_SEND':
            navigate(`/auth/otp/${payload.content.userEmail}`);
            break;
          default:
            setGlobalError(payload.content.message);

            break;
        }
      })
      .catch((error) => {
        console.error('rejected', error);

        setGlobalError(error?.data?.message);
      });
  };
  return (
    <>
      <WithAuth
        title="Ajouter Email"
        formClassNames={'grid grid-cols-1 place-items-center'}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        globalErrorMsg={globalError}
        isLoading={isLoading}
        error={error}
      >
        <div className="w-full ">
          <p className="m-3 text-center">
            {"Veuillez fournir votre email pour l'associer au compte"}
          </p>
        </div>
        <CustomTextIconInput
          icon={<EnvelopeIcon className="w-4 h-4 text-neutral-content" />}
          name="email"
          placeholder="Email"
          className={`${errors.email ? 'input-error' : ''}`}
          control={control}
          defaultValue="aaa@gmail.com"
          error={errors.email?.message}
          aria-invalid={errors.email ? 'true' : 'false'}
          type={'email'}
        />
      </WithAuth>
    </>
  );
};
export default LoginEmail;
