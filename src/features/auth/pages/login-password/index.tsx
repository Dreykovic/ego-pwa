import { KeyIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input/index';
import env from '@/shared/config/env';
import { AppDispatch } from '@/stores';

import { AuthBottomLinkBlock } from '../../components/ui/auth-bottom-link-block';
import { useLoginMutation } from '../../stores/auth-api';
import { makeGlobalLogin } from '../../stores/auth-slice';
import {
  FormValues,
  LoginPasswordFormValues,
  LoginPasswordSchema,
} from '../../types';

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
        console.log(payload.content.token.accessToken);
        dispatch(
          makeGlobalLogin({
            token: payload.content.token.accessToken,
            user: payload.content.user,
          }),
        );
        navigate('/');
      })
      .catch((error) => {
        console.error('rejected', error);
        setGlobalError(error?.data?.content?.message);
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
