import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useVerifyMutation } from '@/features/auth/api';
import WithAuth from '@/features/auth/components/hocs/with-auth';
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

import Alert from '../../components/ui/alert';
import CustomTextIconInput from '../../components/ui/inputs/custom-text-icon-input';
import CustomPhoneInput from '../../components/ui/inputs/phone-input';

const Login: React.FC = () => {
  const [loginMode, setLoginMode] = useState<'phone' | 'email'>('phone');
  const [globalError, setGlobalError] = useState<string>();

  const { message, type } = useSelector((state: RootState) => state.message);
  useEffect(() => {
    if (message) {
      setGlobalError(message);
    }
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginPhoneFormValues | LoginEmailFormValues>({
    resolver: zodResolver(
      loginMode === 'phone' ? LoginPhoneSchema : LoginEmailSchema,
    ),
  });
  const [verify, { isLoading, error }] = useVerifyMutation();

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
    if (loginMode === 'phone' && 'phoneNumber' in data) {
      userIdentify = { identify: data.phoneNumber };
    } else if (loginMode === 'email' && 'email' in data) {
      userIdentify = { identify: data.email };
    } else {
      console.error('Invalid login mode or missing data property');
      return;
    }
    verify(userIdentify)
      .unwrap()
      .then((payload) => {
        console.log('fulfilled', payload);
        switch (payload.content.code) {
          case 'ACCOUNT_VERIFIED_BY_PHONE':
            navigate(`/login/password/${userIdentify.identify}`);
            break;
          case 'ACCOUNT_VERIFY_BY_EMAIL':
            navigate(`/login/password/${userIdentify.identify}`);
            break;

          case 'EMAIL_REQUIRED':
            navigate(`/login/email/${userIdentify.identify}`);
            break;
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
        switch (error.data?.content?.code) {
          case 'EMAIL_REQUIRED':
            navigate(`/login/email/${userIdentify.identify}`);
            return;

          default:
            setGlobalError(error?.data?.message);
            return;
        }
      });
  };

  const handleModeChange = (mode: 'phone' | 'email') => {
    setLoginMode(mode);
    reset(); // reset form fields and errors when changing mode
  };
  return (
    <WithAuth
      title="Connexion"
      formClassNames={'grid grid-cols-1 place-items-center'}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      globalErrorMsg={globalError}
      bottomchildren={
        <AuthBottomLinkBlock
          to={'/register'}
          firstText="Pas encore de compte ?"
          secondText="Créer un compte"
        />
      }
    >
      {message && (
        <Alert message={message} type={type === 0 ? 'ERROR' : 'SUCCESS'} />
      )}
      <div className="w-full text-center">
        <p className="my-2">Se connecter avec: </p>
      </div>
      <div className="flex items-center justify-around bg-transparent mb-4  w-full">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-secondary outline"
              value="phone"
              checked={loginMode === 'phone'}
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
              checked={loginMode === 'email'}
              onChange={() => handleModeChange('email')}
            />
            <span className="label-text text-base-content mx-2">Email</span>
          </label>
        </div>
      </div>
      {loginMode === 'phone' && (
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
      {loginMode === 'email' && (
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

export default Login;
