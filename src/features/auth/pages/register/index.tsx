import { KeyIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useRegisterMutation } from '@/features/auth/api';
import WithAuth from '@/features/auth/components/hocs/with-auth';
import { AuthBottomLinkBlock } from '@/features/auth/components/ui/auth-bottom-link-block';
import {
  FormValues,
  RegisterFormValues,
  RegisterSchema,
} from '@/features/auth/types';
import env from '@/shared/config/env';

import CustomTextIconInput from '../../components/ui/inputs/custom-text-icon-input';
import CustomPhoneInput from '../../components/ui/inputs/phone-input';

const Register: React.FC = () => {
  const [globalError, setGlobalError] = useState<string>();

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
    const userRegisterData: FormValues = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
    };
    console.log(userRegisterData);

    register(userRegisterData)
      .unwrap()
      .then((payload) => {
        console.log('fulfilled', payload);
        switch (payload.content.code) {
          case 'USER_SUCCESSFUL_CREATED':
            if (payload.status === 'success') {
              navigate(`/auth/otp/${data.email}`);
            }
            break;

          default:
            setGlobalError(payload.message);

            break;
        }
      })
      .catch((error) => {
        console.error('rejected', error);
        setGlobalError(error.data.message);
      });
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
        globalErrorMsg={globalError}
        error={error}
        submitBtnText="Valider"
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
