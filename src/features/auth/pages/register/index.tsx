import { KeyIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import WithAuth from '@/features/auth/components/hocs/with-auth';
import { AuthBottomLinkBlock } from '@/features/auth/components/ui/auth-bottom-link-block';
import CustomTextIconInput from '@/shared/components/input/custom-text-icon-input/index';
import CustomPhoneInput from '@/shared/components/input/phone-input';
import env from '@/shared/config/env';

import { useRegisterMutation } from '../../stores/auth-api';
import { RegisterFormValues, RegisterSchema } from '../../types';

const Register: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
  });
  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();
  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    console.log(data);
    if (env.appState === 'demo') {
      navigate('/auth/otp');
      return;
    }
    // const response = await register(data).unwrap();
    // alert(response);
    register(data)
      .unwrap()
      .then((payload) => console.log('fulfilled', payload))
      .catch((error) => console.error('rejected', error));
    // if (response?.success === true) {
    //   navigate('/auth/otp');
    // }
  };
  return (
    <>
      <WithAuth
        title="Créer un compte"
        formClassNames={'grid grid-cols-1 place-items-center'}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        bottomchildren={
          <AuthBottomLinkBlock
            to={'/login'}
            firstText="Déja un compte ?"
            secondText="Se connecter"
          />
        }
      >
        <CustomTextIconInput<RegisterFormValues>
          name="lastName"
          control={control}
          defaultValue="nom"
          className={`${errors.lastName ? 'input-error' : ''}`}
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
          className={`${errors.firstName ? 'input-error' : ''}`}
          icon={<UserIcon className="w-4 h-4 text-neutral-content" />}
          type="text"
          placeholder="Prénom"
          error={errors.firstName?.message}
          aria-invalid={errors.firstName ? 'true' : 'false'}
        />

        <CustomPhoneInput
          name="phoneNumber"
          className={`${errors.email ? 'input-error' : ''}`}
          control={control}
          defaultValue=""
          placeholder=""
          error={errors.phoneNumber?.message}
          aria-invalid={errors.phoneNumber ? 'true' : 'false'}
        />

        <CustomTextIconInput<RegisterFormValues>
          name="email"
          control={control}
          defaultValue="audrey@gmail.com"
          className={`${errors.email ? 'input-error' : ''}`}
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
          className={`${errors.password ? 'input-error' : ''}`}
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
          className={`${errors.confirmPassword ? 'input-error' : ''}`}
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
      </WithAuth>
    </>
  );
};
export default Register;
