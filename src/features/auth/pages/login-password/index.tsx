import { useNavigate } from 'react-router-dom';

import { KeyIcon } from '@heroicons/react/24/outline';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input/index';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginPasswordFormValues, LoginPasswordSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AppDispatch } from '@/shared/stores/store';
import { useDispatch } from 'react-redux';
import { setToken } from '@/shared/components/right-drawer/right-drawer-slice';

const LoginPasswordForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPasswordFormValues>({
    resolver: zodResolver(LoginPasswordSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginPasswordFormValues> = (data) => {
    console.log(data);
    console.log('login');
    dispatch(setToken({ token: true }));
    navigate('/');
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center"
    >
      <CustomTextIconInput
        icon={<KeyIcon className="w-4 h-4 text-neutral-content" />}
        type="password"
        placeholder="Mot De Passe"
        className=""
        defaultValue="cococo"
        name={'password'}
        control={control}
        error={errors.password?.message}
        aria-invalid={errors.password ? 'true' : 'false'}
      />

      <div className="mt-8 flex justify-center ">
        <button className="btn btn-neutral px-10 py-2" type="submit">
          Connexion
        </button>
      </div>
    </form>
  );
};
const LoginPassword: React.FC = () => {
  return (
    <>
      <WithAuth title="connexion">
        <LoginPasswordForm />
      </WithAuth>
    </>
  );
};
export default LoginPassword;