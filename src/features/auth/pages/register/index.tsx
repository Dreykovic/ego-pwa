import { KeyIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import { AuthBottomLinkBlock } from '@/features/auth/components/ui/auth-bottom-link-block';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input/index';
import CustomPhoneInput from '@/shared/components/input/phone-input';

import { RegisterFormValues, RegisterSchema } from './schema';

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log(data);
    navigate('/auth/otp');
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 max-sm:w-3/4  m-auto"
    >
      <CustomTextIconInput<RegisterFormValues>
        name="lastName"
        control={control}
        defaultValue="nom"
        className=""
        icon={<UserIcon className="w-4 h-4 text-neutral-content" />}
        type="text"
        placeholder="Nom"
        error={errors.lastName?.message}
        aria-invalid={errors.lastName ? 'true' : 'false'}
      />

      <CustomTextIconInput<RegisterFormValues>
        name="firstName"
        control={control}
        defaultValue="prenom"
        className=""
        icon={<UserIcon className="w-4 h-4 text-neutral-content" />}
        type="text"
        placeholder="Prénom"
        error={errors.firstName?.message}
        aria-invalid={errors.firstName ? 'true' : 'false'}
      />

      <CustomPhoneInput
        name="phoneNumber"
        className="max-sm:w-3/4"
        control={control}
        defaultValue=""
        placeholder=""
        error={errors.phoneNumber?.message}
        aria-invalid={errors.phoneNumber ? 'true' : 'false'}
      />

      <CustomTextIconInput<RegisterFormValues>
        name="email"
        control={control}
        defaultValue="aaa@exemple.com"
        className=""
        icon={<EnvelopeIcon className="w-4 h-4 text-neutral-content" />}
        type="email"
        placeholder="Adresse mail"
        error={errors.email?.message}
        aria-invalid={errors.email ? 'true' : 'false'}
      />
      <CustomTextIconInput<RegisterFormValues>
        name="password"
        control={control}
        defaultValue="cococo"
        className=""
        icon={<KeyIcon className="w-4 h-4 text-neutral-content" />}
        type="password"
        placeholder="Mot de passe"
        error={errors.password?.message}
        aria-invalid={errors.password ? 'true' : 'false'}
      />
      <CustomTextIconInput<RegisterFormValues>
        name="confirmPassword"
        control={control}
        defaultValue="cococo"
        className=""
        icon={<KeyIcon className="w-4 h-4 text-neutral-content" />}
        type="password"
        placeholder="Confirmer le mot de passe"
        error={errors.confirmPassword?.message}
        aria-invalid={errors.confirmPassword ? 'true' : 'false'}
      />

      <AuthBottomLinkBlock
        to={'/login/email'}
        firstText="En vous connectant vous acceptez la"
        secondText="politique de confidentialité"
      />
      <div className="my-6 flex justify-center ">
        {/* <Link to={"/login/email"}> */}
        <button className="btn btn-neutral px-10 py-2" type="submit">
          Continuer
        </button>
        {/* </Link> */}
      </div>

      <AuthBottomLinkBlock
        to={'/login'}
        firstText="Déja un compte ?"
        secondText="Se connecter"
      />
    </form>
  );
};
const Register: React.FC = () => {
  return (
    <>
      <WithAuth title="Créer un compte">
        <RegisterForm />
      </WithAuth>
    </>
  );
};
export default Register;
