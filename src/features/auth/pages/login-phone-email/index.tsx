import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import CustomPhoneInput from '@/shared/components/input/phone-input';
import {
  LoginEmailFormValues,
  LoginPhoneFormValues,
  LoginPhoneSchema,
  LoginEmailSchema,
} from '../../types';
import { useState } from 'react';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const LoginForm = () => {
  const [loginMode, setLoginMode] = useState<'phone' | 'email'>('phone');

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

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginPhoneFormValues | LoginEmailFormValues> = (
    data,
  ) => {
    console.log(data);
    navigate('/login/email');
  };

  const handleModeChange = (mode: 'phone' | 'email') => {
    setLoginMode(mode);
    reset(); // reset form fields and errors when changing mode
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1   /5 m-auto"
    >
      <p className="my-2">Se connecter avec: </p>
      <div className="flex items-center justify-around bg-neutral mb-4">
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
            <span className="label-text text-neutral-content mx-2">
              Contact
            </span>
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
            <span className="label-text text-neutral-content mx-2">Email</span>
          </label>
        </div>
      </div>
      {loginMode === 'phone' && (
        <CustomPhoneInput
          name="phoneNumber"
          className="max-sm:w-3/4 "
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
          className=""
          control={control}
          defaultValue=""
          error={(errors as FieldErrors<LoginEmailFormValues>).email?.message}
          aria-invalid={!!(errors as FieldErrors<LoginEmailFormValues>).email}
          type="email"
        />
      )}

      <div className="flex justify-center text-lg">
        <button className="btn btn-neutral px-10 py-2" type="submit">
          Continuer
        </button>
      </div>
      <div className="text-gost flex text-center flex-col mt-2 items-center text-sm py-2">
        <p className="cursor-default">
          Vous n&apos;avez pas de compte ?
          <Link to="/register" className="link link-primary ml-2">
            Créer un compte
          </Link>
        </p>
      </div>
    </form>
  );
};

const Login: React.FC = () => {
  return (
    <WithAuth title="Connexion">
      <LoginForm />
    </WithAuth>
  );
};

export default Login;
