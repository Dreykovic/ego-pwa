import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import {
  useResendOtpMutation,
  useVerifyOtpMutation,
} from '@/features/auth/api';
import WithAuth from '@/features/auth/components/hocs/with-auth';
import SuccessAlert from '@/features/auth/components/ui/success-alert';
import { FormValues, OtpFormValues, OtpSchema } from '@/features/auth/types';
import OtpInput from '@/shared/components/ui/input/otp-input';
import env from '@/shared/config/env';

const Otp: React.FC = () => {
  const { email } = useParams();
  const [globalError, setGlobalError] = useState<string>();
  const [globalSuccess, setGlobalSuccess] = useState<string>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(OtpSchema),
  });
  const [verifyOtp, { isLoading: isVerifying, error: verifyError }] =
    useVerifyOtpMutation();
  const [resendOtp, { isLoading: isResending, error: resendError, isSuccess }] =
    useResendOtpMutation();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<OtpFormValues> = (data) => {
    if (env.appState === 'demo') {
      console.log('login');
      navigate(
        env.appState != 'demo' ? '/login/password/:email' : '/login/password/',
      );
      return;
    }
    if (!email && env.appState != 'demo') {
      navigate('/login');
      return;
    }

    const userOtpVerify: FormValues = {
      email: email as string,
      otp: data.otp,
    };
    verifyOtp(userOtpVerify)
      .unwrap()
      .then((payload) => {
        console.log('fulfilled', payload);
        switch (payload.content.code) {
          case 'OTP_VERIFIED':
            navigate(`/login/password/${userOtpVerify.email}`);
            break;

          default:
            setGlobalError(payload.content.message);

            break;
        }
      })
      .catch((error) => {
        console.error('rejected', error);
        switch (error.data?.content?.code) {
          case 'INVALID_OTP':
            setGlobalError(error?.data?.message);

            return;
            break;

          default:
            return;
            break;
        }
        // TODO:
        setGlobalError('');
      });
  };

  const handleResendOtp = () => {
    if (!email) return;
    resendOtp({ email })
      .unwrap()
      .then((payload) => {
        console.log('OTP resent', payload);
        setGlobalSuccess(payload.message);
      })
      .catch((error) => {
        console.error('resend OTP failed', error);
        setGlobalError(error.message);
      });
  };

  return (
    <WithAuth
      title="Confirmer l'otp"
      formClassNames={'grid grid-cols-1 place-items-center'}
      onSubmit={onSubmit}
      globalErrorMsg={globalError}
      handleSubmit={handleSubmit}
      isLoading={isVerifying}
      error={verifyError || resendError}
      submitBtnText="Envoyer"
    >
      {isSuccess && <SuccessAlert message={globalSuccess} />}

      <div className="w-full ">
        <p className="m-3 text-center">
          Veuillez saisir le code de confrmation qui vous a été envoyé sur votre
          adresse email {email ?? ''}
        </p>
      </div>
      <OtpInput
        name="otp"
        className={`${errors.otp ? 'input-error' : ''}`}
        control={control}
        error={errors.otp?.message}
        aria-invalid={errors.otp ? 'true' : 'false'}
        otpLength={6}
      />
      <button
        className={`btn btn-link btn-ghost  ${isResending ? 'loading' : ''}`}
        onClick={handleResendOtp}
        disabled={isResending}
      >
        {isResending ? 'Envoi en cours...' : "Renvoyer l'otp"}
      </button>
    </WithAuth>
  );
};

export default Otp;
