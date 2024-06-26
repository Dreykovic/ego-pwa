import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input';
import CustomPhoneInput from '@/shared/components/input/phone-input';
import env from '@/shared/config/env';

import { AuthBottomLinkBlock } from '../../components/ui/auth-bottom-link-block';
import { useVerifyMutation } from '../../stores/auth-api';
import {
  LoginEmailFormValues,
  LoginPhoneFormValues,
  LoginPhoneSchema,
  LoginEmailSchema,
  Identify,
} from '../../types';

const Login: React.FC = () => {
  const [loginMode, setLoginMode] = useState<'phone' | 'email'>('phone');
  const [globalError, setGlobalError] = useState<string>();

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
        switch (payload.status) {
          case 'success':
            navigate(`/login/password/${userIdentify.identify}`);
            break;
          case 'pending':
            navigate(`/auth/otp/${payload.content.userEmail.email}`);
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
          firstText=" Vous n'avez pas de compte ?"
          secondText=" Créer un compte"
        />
      }
    >
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
