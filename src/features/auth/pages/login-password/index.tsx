import { KeyIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { useLoginMutation } from '@/features/auth/api';
import WithAuth from '@/features/auth/components/hocs/with-auth';
import { AuthBottomLinkBlock } from '@/features/auth/components/ui/auth-bottom-link-block';
import {
  FormValues,
  LoginPasswordFormValues,
  LoginPasswordSchema,
} from '@/features/auth/types';
import env from '@/shared/config/env';
import { AppDispatch } from '@/stores';
import { makeGlobalLogin } from '@/stores/auth-slice';

import CustomTextIconInput from '../../components/ui/inputs/custom-text-icon-input';

const LoginPassword: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [globalError, setGlobalError] = useState<string>();
  const { identify } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPasswordFormValues>({
    resolver: zodResolver(LoginPasswordSchema),
  });
  const [login, { isLoading, error }] = useLoginMutation();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginPasswordFormValues> = (data) => {
    console.log(data);
    if (env.appState === 'demo') {
      console.log('login');
      dispatch(
        makeGlobalLogin({
          token: 'TestMockTOken',
          user: {
            firstname: 'Aus',
            lastname: 'koko',
            email: 'gogo',

            phoneNumber: '707458562',
          },
        }),
      );
      navigate('/');
    }
    if (!identify && env.appState != 'demo') {
      navigate('/login');
    }

    const userLogindata: FormValues = {
      identify: identify as string,
      password: data.password,
    };
    login(userLogindata)
      .unwrap()
      .then((payload) => {
        console.log('fulfilled', payload);
        console.log(payload.content.tokens.accessToken);
        dispatch(
          makeGlobalLogin({
            token: payload.content.tokens.accessToken,
            user: payload.content.user,
          }),
        );
        navigate('/');
      })
      .catch((error) => {
        console.error('rejected', error);
        setGlobalError(error?.data?.message);
      });
  };
  return (
    <>
      <WithAuth
        title="Connexion"
        formClassNames={'grid grid-cols-1 place-items-center'}
        onSubmit={onSubmit}
        globalErrorMsg={globalError}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        bottomchildren={
          <AuthBottomLinkBlock
            to={'/auth/password-forgot'}
            firstText=""
            secondText=" Mot de passe oublié ?"
          />
        }
        submitBtnText="Se connecter"
      >
        <div className="w-full ">
          <p className="m-3 text-center">
            Encore une étaape pour terminer. Veuillez saisir votre mot de passe
          </p>
        </div>
        <CustomTextIconInput
          icon={<KeyIcon className="w-4 h-4 text-neutral-content" />}
          type="password"
          placeholder="Mot De Passe"
          className=""
          defaultValue=""
          name={'password'}
          control={control}
          error={errors.password?.message}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
      </WithAuth>
    </>
  );
};
export default LoginPassword;
