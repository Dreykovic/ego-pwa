import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input';
import env from '@/shared/config/env';

import SuccessAlert from '../../components/ui/success-alert';
import { useRequestResetPasswordMutation } from '../../stores/auth-api';
import { LoginEmailFormValues, LoginEmailSchema } from '../../types';

const PasswordForgot: React.FC = () => {
  const [globalSuccess, setGlobalSuccess] = useState<string>();
  const [globalError, setGlobalError] = useState<string>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginEmailFormValues>({
    resolver: zodResolver(LoginEmailSchema),
  });
  const [requestResetPassword, { isLoading, error, isSuccess }] =
    useRequestResetPasswordMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginEmailFormValues> = (data) => {
    console.log(data);
    if (env.appState === 'demo') {
      navigate('/auth/password-reset');
      return;
    }
    requestResetPassword(data)
      .unwrap()
      .then((payload) => {
        console.log('fulfilled', payload);
        if (payload.status === 'success') {
          // navigate(`/auth/password/${data.email}`);
          setGlobalSuccess(payload.content.message);
        }
      })
      .catch((error) => {
        console.error('rejected', error);
        setGlobalError(error.data.content.message);
      });
  };
  return (
    <>
      <WithAuth
        title="Mot de passe oublié"
        formClassNames={'grid grid-cols-1 place-items-center'}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        submitBtnText="Recevoir le code"
        globalErrorMsg={globalError}
      >
        {/* TODO: Ajouter un texte de message */}
        {isSuccess && <SuccessAlert message={globalSuccess} />}
        <CustomTextIconInput
          icon={<EnvelopeIcon className="w-4 h-4 text-neutral-content" />}
          name="email"
          placeholder="Email"
          className={`${errors.email ? 'input-error' : ''}`}
          control={control}
          defaultValue="abalo@gmail.com"
          error={errors.email?.message}
          aria-invalid={errors.email ? 'true' : 'false'}
          type={'email'}
        />
      </WithAuth>
    </>
  );
};
export default PasswordForgot;
