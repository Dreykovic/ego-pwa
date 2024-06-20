import CustomPhoneInput from '@/shared/components/input/phone-input';
import WithAuth from '@/features/auth/components/hocs/with-auth';
import { LoginPhoneFormValues, LoginPhoneSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPhoneFormValues>({
    resolver: zodResolver(LoginPhoneSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginPhoneFormValues> = (data) => {
    console.log(data);
    navigate('/login/email');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center px-16 "
    >
      <div className="mb-8">
        <CustomPhoneInput
          name="phoneNumber"
          className=""
          control={control}
          defaultValue=""
          placeholder=""
          error={errors.phoneNumber?.message}
          aria-invalid={errors.phoneNumber ? 'true' : 'false'}
        />
      </div>

      <div className="flex justify-center text-lg">
        <button className="btn btn-neutral px-10 py-2 w-full" type="submit">
          Continuer
        </button>
      </div>
      <div className="text-gost flex text-center flex-col mt-2 items-center text-sm py-2">
        <p className="cursor-default">
          Vous n'aver pas de compte ?
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
