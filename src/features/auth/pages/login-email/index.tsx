import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input';
import env from '@/shared/config/env';

import { useRecoverEmailMutation } from '../../stores/auth-api';
import { LoginEmailFormValues, LoginEmailSchema } from '../../types';

const LoginEmail: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginEmailFormValues>({
    resolver: zodResolver(LoginEmailSchema),
  });
  const [recoverEmail, { isLoading, error }] = useRecoverEmailMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginEmailFormValues> = (data) => {
    console.log(data);
    if (env.appState === 'demo') {
      navigate(env.appState != 'demo' ? '/auth/otp/:email' : '/auth/otp/');
      return;
    }
    recoverEmail(data)
      .unwrap()
      .then((payload) => console.log('fulfilled', payload))
      .catch((error) => console.error('rejected', error));
  };
  return (
    <>
      <WithAuth
        title="Ajouter Email"
        formClassNames={'grid grid-cols-1 place-items-center'}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      >
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
