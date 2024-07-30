import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useRequestResetPasswordMutation } from '@/features/auth/api';
import WithAuth from '@/features/auth/components/hocs/with-auth';
import Alert from '@/features/auth/components/ui/alert';
import { AuthBottomLinkBlock } from '@/features/auth/components/ui/auth-bottom-link-block';
import {
  LoginEmailFormValues,
  LoginPhoneFormValues,
  LoginPhoneSchema,
  LoginEmailSchema,
  Identify,
} from '@/features/auth/types';
import env from '@/shared/config/env';
import { RootState } from '@/stores';

import CustomTextIconInput from '../../components/ui/inputs/custom-text-icon-input';
import CustomPhoneInput from '../../components/ui/inputs/phone-input';

const PasswordForgot: React.FC = () => {
  const [pwdForgotMode, setPwdForgotMode] = useState<'phone' | 'email'>(
    'phone',
  );
  const [globalError, setGlobalError] = useState<string>();
  const [globalSuccess, setGlobalSuccess] = useState<string>();

  const { message, type } = useSelector((state: RootState) => state.message);
  useEffect(() => {
    if (message) {
      if (type === 0) {
        setGlobalError(message);
      } else {
        setGlobalSuccess(message);
      }
    }
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginPhoneFormValues | LoginEmailFormValues>({
    resolver: zodResolver(
      pwdForgotMode === 'phone' ? LoginPhoneSchema : LoginEmailSchema,
    ),
  });
  const [requestResetPassword, { isLoading, error, isSuccess }] =
    useRequestResetPasswordMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginPhoneFormValues | LoginEmailFormValues> = (
    data,
  ) => {
    console.log(data);
    if (env.appState === 'demo') {
      navigate('/login/email');
      return;
    }
    let userIdentify: Identify;

    if (pwdForgotMode === 'phone' && 'phoneNumber' in data) {
      userIdentify = { identify: data.phoneNumber };
    } else if (pwdForgotMode === 'email' && 'email' in data) {
      userIdentify = { identify: data.email };
    } else {
      console.error('Invalid login mode or missing data property');
      return;
    }
    requestResetPassword(userIdentify)
      .unwrap()
      .then((payload) => {
        console.log('fulfilled', payload);
        switch (payload.content.code) {
          case 'EMAIL_FOUND':
            if (payload.status === 'success') {
              // navigate(`/auth/password/${data.email}`);
              setGlobalSuccess(payload.message);
            }
            break;

          default:
            setGlobalError(payload.message);

            break;
        }
      })
      .catch((error) => {
        console.error('rejected', error);

        setGlobalError(error?.data?.message);
      });
  };

  const handleModeChange = (mode: 'phone' | 'email') => {
    setPwdForgotMode(mode);
    reset(); // reset form fields and errors when changing mode
  };
  return (
    <WithAuth
      title="Mot de passe oublié"
      formClassNames={'grid grid-cols-1 place-items-center'}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      globalErrorMsg={globalError}
      bottomchildren={
        <AuthBottomLinkBlock
          to={'/login'}
          firstText=""
          secondText="Se connecter"
        />
      }
    >
      {isSuccess && <Alert message={globalSuccess} type="SUCCESS" />}
      {message && (
        <Alert message={message} type={type === 0 ? 'ERROR' : 'SUCCESS'} />
      )}

      <div className="w-full text-center">
        <p className="my-2">Restaurer le mot de passe avec: </p>
      </div>
      <div className="flex items-center justify-around bg-transparent mb-4  w-full">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-secondary outline"
              value="phone"
              checked={pwdForgotMode === 'phone'}
              onChange={() => handleModeChange('phone')}
            />
            <span className="label-text text-base-content mx-2">Contact</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary outline"
              value="email"
              checked={pwdForgotMode === 'email'}
              onChange={() => handleModeChange('email')}
            />
            <span className="label-text text-base-content mx-2">Email</span>
          </label>
        </div>
      </div>
      {pwdForgotMode === 'phone' && (
        <CustomPhoneInput
          name="phoneNumber"
          className={`${(errors as FieldErrors<LoginPhoneFormValues>).phoneNumber ? 'input-error' : ''}`}
          control={control}
          defaultValue=""
          placeholder=""
          error={
            (errors as FieldErrors<LoginPhoneFormValues>).phoneNumber?.message
          }
          aria-invalid={
            !!(errors as FieldErrors<LoginPhoneFormValues>).phoneNumber
          }
        />
      )}
      {pwdForgotMode === 'email' && (
        <CustomTextIconInput
          icon={<EnvelopeIcon className="w-4 h-4 text-neutral-content" />}
          name="email"
          placeholder="Email"
          className={`${(errors as FieldErrors<LoginEmailFormValues>).email ? 'input-error' : ''}`}
          control={control}
          defaultValue=""
          error={(errors as FieldErrors<LoginEmailFormValues>).email?.message}
          aria-invalid={!!(errors as FieldErrors<LoginEmailFormValues>).email}
          type="email"
        />
      )}
    </WithAuth>
  );
};

export default PasswordForgot;
