import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input';
import { LoginEmailFormValues, LoginEmailSchema } from '../../types';

const LoginEmailForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginEmailFormValues>({
    resolver: zodResolver(LoginEmailSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginEmailFormValues> = (data) => {
    console.log(data);
    navigate('/auth/otp');
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center"
    >
      <CustomTextIconInput
        icon={<EnvelopeIcon className="w-4 h-4 text-neutral-content" />}
        name="email"
        placeholder="Email"
        className=""
        control={control}
        defaultValue="aaa@exemple.com "
        error={errors.email?.message}
        aria-invalid={errors.email ? 'true' : 'false'}
        type={'email'}
      />

      <div className="mt-8 flex justify-center ">
        <button className="btn btn-neutral px-10 py-2" type="submit">
          continuer
        </button>
      </div>
    </form>
  );
};
const LoginEmail: React.FC = () => {
  return (
    <>
      <WithAuth title="Ajouter email">
        <LoginEmailForm />
      </WithAuth>
    </>
  );
};
export default LoginEmail;
