import { KeyIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { useResetPasswordMutation } from '@/features/auth/api';
import WithAuth from '@/features/auth/components/hocs/with-auth';
import Alert from '@/features/auth/components/ui/alert';
import {
  FormValues,
  PasswordResetFormValues,
  PasswordResetSchema,
} from '@/features/auth/types';
import env from '@/shared/config/env';
import { AppDispatch } from '@/stores';
import { sendGlobalMessage } from '@/stores/message-slice';

import CustomTextIconInput from '../../components/ui/inputs/custom-text-icon-input';

const PasswordReset: React.FC = () => {
  const { token } = useParams();
  const [globalError, setGlobalError] = useState<string>();
  const [globalSuccess, setGlobalSuccess] = useState<string>();
  const dispatch = useDispatch<AppDispatch>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordResetFormValues>({
    resolver: zodResolver(PasswordResetSchema),
  });
  const navigate = useNavigate();
  const [resetPassword, { isLoading, error, isSuccess }] =
    useResetPasswordMutation();
  const onSubmit: SubmitHandler<PasswordResetFormValues> = async (data) => {
    // TODO: Enregistrer l'adresse du front end dans le en du back
    // console.log(data);
    if (env.appState === 'demo') {
      navigate('/login');
      return;
    }
    if (!token && env.appState != 'demo') {
      navigate('/login');
      return;
    }
    const userResetPasswordData: FormValues = {
      token: token as string,
      newPassword: data.password,
    };
    //console.log(userResetPasswordData);

    resetPassword(userResetPasswordData)
      .unwrap()
      .then((payload) => {
        if (payload.content.code === 'PASSWORD_RESET') {
          setGlobalSuccess('');
          dispatch(sendGlobalMessage({ message: payload.message, type: 1 }));

          // navigate('/');
        }
        console.log('fulfilled', payload);
      })
      .catch((error) => {
        console.error('rejected', error);
        if (error.data.content.code === 'INVALID_TOKEN') {
          // TODO: Avec u message pour le metttre dans le composant suivant
          setGlobalError('');
          dispatch(
            sendGlobalMessage({ message: error?.data?.message, type: 0 }),
          );
          navigate('/auth/password-forgot');
        }
      });
  };
  return (
    <>
      <WithAuth
        title="Changer Mot De Passe"
        formClassNames={'grid grid-cols-1 place-items-center'}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        globalErrorMsg={globalError}
        submitBtnText="Confirmer"
      >
        {isSuccess && <Alert message={globalSuccess} type="SUCCESS" />}

        <CustomTextIconInput<PasswordResetFormValues>
          name="password"
          control={control}
          defaultValue=""
          className={`${errors.password ? 'input-error' : ''}`}
          icon={<KeyIcon className="w-4 h-4 text-neutral-content" />}
          type="password"
          placeholder="Nouveau Mot de passe"
          error={errors.password?.message}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        <CustomTextIconInput<PasswordResetFormValues>
          name="confirmPassword"
          control={control}
          defaultValue=""
          className={`${errors.confirmPassword ? 'input-error' : ''}`}
          icon={<KeyIcon className="w-4 h-4 text-neutral-content" />}
          type="password"
          placeholder="Confirmer le mot de passe"
          error={errors.confirmPassword?.message}
          aria-invalid={errors.confirmPassword ? 'true' : 'false'}
        />
      </WithAuth>
    </>
  );
};
export default PasswordReset;
