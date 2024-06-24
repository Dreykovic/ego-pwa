import { KeyIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input/index';
import env from '@/shared/config/env';

import { useResetPasswordMutation } from '../../stores/auth-api';
import { PasswordResetFormValues, PasswordResetSchema } from '../../types';

const PasswordReset: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordResetFormValues>({
    resolver: zodResolver(PasswordResetSchema),
  });
  const navigate = useNavigate();
  const [resetPassword, { isLoading, error }] = useResetPasswordMutation();
  const onSubmit: SubmitHandler<PasswordResetFormValues> = async (data) => {
    console.log(data);
    if (env.appState === 'demo') {
      navigate('/auth/otp');
      return;
    }
    resetPassword(data)
      .unwrap()
      .then((payload) => console.log('fulfilled', payload))
      .catch((error) => console.error('rejected', error));
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
        submitBtnText="Confirmer"
      >
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
